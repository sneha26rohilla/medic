# from flask import Flask, render_template, request, redirect, url_for
# app = Flask(__name__)

# # List to store donations (In a real-world app, this would be a database)
# donations = []

# @app.route('/')
# def index():
#     return render_template('indexx.html', donations=donations)

# @app.route('/donate', methods=['POST'])
# def donate():
#     amount = request.form['amount']
#     name = request.form['name']
    
#     if amount and name:
#         donations.append({'name': name, 'amount': amount})
    
#     return redirect(url_for('index'))

# if __name__ == '__main__':
#     app.run(debug=True)

# from flask import Flask, render_template, request, redirect, url_for
# app = Flask(__name__)

# # In-memory "database" to store donations
# donations = []

# # Home page with the donation form
# @app.route('/', methods=['GET', 'POST'])
# def home():
#     if request.method == 'POST':
#         # Get form data
#         name = request.form['name']
#         email = request.form['email']
#         medicine_name = request.form['medicine-name']
#         expiry_date = request.form['expiry-date']
#         quantity = request.form['quantity']
#         condition = request.form['condition']

#         # Create a new donation dictionary
#         donation = {
#             'name': name,
#             'email': email,
#             'medicine_name': medicine_name,
#             'expiry_date': expiry_date,
#             'quantity': quantity,
#             'condition': condition
#         }

#         # Store donation in the "database"
#         donations.append(donation)

#         # Redirect to the donations list page after submission
#         return redirect(url_for('donations'))

#     return render_template('indexx.html')


# # Donations page to show all donations made
# @app.route('/donations')
# def donations_page():
#     return render_template('donations.html', donations=donations)


# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory "database" to store donations
donations = []

# Home page with the donation form
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get form data
        name = request.form['name']
        email = request.form['email']
        medicine_name = request.form['medicine-name']
        expiry_date = request.form['expiry-date']
        quantity = request.form['quantity']
        condition = request.form['condition']

        # Create a new donation dictionary
        donation = {
            'name': name,
            'email': email,
            'medicine_name': medicine_name,
            'expiry_date': expiry_date,
            'quantity': quantity,
            'condition': condition
        }

        # Store donation in the "database"
        donations.append(donation)

        # Redirect to the donations list page after submission
        return redirect(url_for('donations_page'))

    return render_template('indexx.html')

# Donations page to show all donations made
@app.route('/donations')
def donations_page():
    return render_template('donations.html', donations=donations)

if __name__ == '__main__':
    app.run(debug=True)
