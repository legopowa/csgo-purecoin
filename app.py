from flask import Flask, request, render_template
from flask_cors import CORS
import requests

app = Flask(__name__, static_folder='.', static_url_path='', template_folder='.')

CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gotsteamid')
def got_steam_id():
    return render_template('GotSteamID.html')

@app.route('/openid_return', methods=['GET'])
def openid_return():
    # Gather parameters from the OpenID return
    params = {
        'openid.ns': request.args.get('openid.ns'),
        'openid.mode': 'check_authentication',
        'openid.op_endpoint': request.args.get('openid.op_endpoint'),
        'openid.claimed_id': request.args.get('openid.claimed_id'),
        'openid.identity': request.args.get('openid.identity'),
        'openid.return_to': request.args.get('openid.return_to'),
        'openid.response_nonce': request.args.get('openid.response_nonce'),
        'openid.assoc_handle': request.args.get('openid.assoc_handle'),
        'openid.signed': request.args.get('openid.signed'),
        'openid.sig': request.args.get('openid.sig')
    }

    claimed_id= request.args.get('openid.claimed_id')

    # Send a direct verification request to Steam
    response = requests.post('https://steamcommunity.com/openid/login', data=params)
    
    if 'is_valid:true' in response.text:
        return render_template('openid_response.html', claimed_id=claimed_id)

    else:
        return "OpenID response is INVALID!"

@app.route('/verify', methods=['POST'])
def verify_openid():
    openid_params = request.form.to_dict()
    openid_params['openid.ns'] = 'http://specs.openid.net/auth/2.0'
    openid_params['openid.mode'] = 'check_authentication'

    response = requests.post('https://steamcommunity.com/openid/login', data=openid_params)
    
    if 'is_valid:true' in response.text:
        return "OpenID response is valid!"
    else:
        return "OpenID response is NOT valid!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
