# render allows us to display / return the html  file on entering route"/"
from flask import Flask, render_template, request, url_for, redirect
app = Flask(__name__)

# Note debug mode need to be switched on in order to prevent usage of "flask run" ecah time changes are made
# template = add html files
# static = addd js and css


@app.route('/')  # decorator - helps us build routs in the server
def portfolioPage():
    return render_template("index.html")


@app.route('/<string:page_name>')  # dynamic page calling
def html_page(page_name):
    return render_template(page_name)


@app.route("/submit_details", methods=['POST', 'GET'])
def sendData():
    if request.method == "POST":
        # data = request.form["email"] , use this or just make a dictionary
        data = request.form.to_dict()
        return redirect("/thankyou.html")
    else:
        return "Something Went wrong"
