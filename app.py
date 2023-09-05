from flask import Flask, request
import requests

app = Flask(__name__)

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
