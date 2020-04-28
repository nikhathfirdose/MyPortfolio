# render allows us to display / return the html  file on entering route"/"
from flask import Flask, render_template
app = Flask(__name__)

# Note debug mode need to be switched on in order to prevent usage of "flask run" ecah time changes are made
# template = add html files
# static = addd js and css


@app.route('/')  # decorator - helps us build routs in the server
def portfolioPage():
    return render_template("index.html")
