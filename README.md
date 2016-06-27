#Daycare Finder
Find a daycare nearby.

###Setup
For the front end:

`npm i` – Install NPM dependencies
`npm start` – Start webpack build

For the back end:

Click [here](https://pip.pypa.io/en/stable/installing/) to download pip
Download the file `get-pip.py` (I usually put it on my Desktop)
`python ~/Desktop/get-pip.py` - Installs pip
`pip install virtualenv` - If you don't already have virtualenv
Type these next commands in the same level as requirements.txt:
    `virtualenv -p </path/to/python3/exe/file>` - Creates Python3 virtualenv (type `which python3` to find path)
    `source bin/activate` - Activate virtualenv (`deactivate` to deactivate env)
    `pip install -r requirements.txt` - Install Python requirements
`python manage.py runserver` - Run server (in same directory as manage.py)

####Front End To-do
* Transparent, smaller (height), and bottom border 1px solid #f2f2f2 on scroll
