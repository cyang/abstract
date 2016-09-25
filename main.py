#use pip install 
from flask import Flask, request, jsonify
#https://github.com/xiaoxu193/PyTeaser
from pyteaser import Summarize

#https://github.com/grangier/python-goose
from goose import Goose
# git clone https://github.com/grangier/python-goose.git
# cd python-goose
# pip install -r requirements.txt
# python setup.py install

app = Flask(__name__)
@app.route('/', methods=['GET'])
def get_summary():
  try:
    url = request.args.get('url')
    g = Goose({'browser_user_agent': 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0', 'parser_class':'soup'})
    article = g.extract(url=url)
    title = article.title
    text = article.cleaned_text
    summaries = Summarize(title, text)
    stringtext = ""
    for i in summaries:
      stringtext= stringtext + " "+ i 
    return jsonify(stringtext)
  except:
    return jsonify('none')

if __name__ == '__main__':
  app.run(debug=True)