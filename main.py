from flask import jsonify
from flask import Flask
from flask import request
# from textparser import parser

app = Flask(__name__)
@app.route('/', methods=['GET'])
def get_summary():
  url = request.args.get('url')
  #text = parser(url)
  # response = unirest.get("https://community-smmry.p.mashape.com/?SM_API_KEY=279153A47B&SM_LENGTH=2&SM_URL={}".format(url),
  # headers={
  #   "X-Mashape-Key": "UHmxbuQKVWmsh69rxNfyDIPjObcVp1DhFdQjsnR0gUpePgdDUw",
  #   "Accept": "text/plain"
  # # })
  response = str(html)
  d = json.loads(html)
  return d["sm_api_message"]

  
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
