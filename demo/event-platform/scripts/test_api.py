import urllib.request, json

def req(url, method='GET', data=None, headers=None):
    if headers is None: headers = {}
    if data is not None:
        data = json.dumps(data).encode('utf-8')
        headers['Content-Type'] = 'application/json'
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            return r.getcode(), r.read().decode('utf-8')
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode('utf-8')
    except Exception as e:
        return None, str(e)

base = 'http://127.0.0.1:8000/api/'
username = 'testuser'
password = 'secretpass'
email = 'testuser@example.com'

print('Registering user...')
code, body = req(base + 'register', 'POST', {'username': username, 'email': email, 'password': password})
print('Register:', code)
print(body[:1000])

print('\nLogging in...')
code, body = req(base + 'login', 'POST', {'username': username, 'password': password})
print('Login:', code)
print(body[:1000])

access = None
try:
    j = json.loads(body)
    access = j.get('access')
except Exception:
    pass

if access:
    print('\nCalling my-registrations with token...')
    code, body = req(base + 'my-registrations', 'GET', None, {'Authorization': f'Bearer {access}'})
    print('My registrations:', code)
    print(body[:2000])
else:
    print('\nNo token received; cannot call protected endpoint.')
