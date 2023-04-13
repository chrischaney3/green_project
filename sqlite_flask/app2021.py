from flask import Flask, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd
import datetime as dt
import os
import numpy as np


engine = create_engine("sqlite:///Resources/ev_data_2021.sqlite", echo=False)
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine=engine, reflect=True)
# View all of the classes that automap found
Base.classes.keys()


# Save a reference to the tables I will use
Data = Base.classes.ev_data_2021

# Flask Setup
app = Flask(__name__)

# Flask Routes
@app.route("/")
def welcome():
    return (
        f"Welcome to the Electric Vehicle Charging Stations API 2021!<br/>"
        f"Available Routes:<br/>"
        f"/fuelingStationTypes<br>"
        f"/name<br>"
        f"/cities<br>"
        f"/count<br>"
        f"/accissibility<br>"
    )


# Route for fueling station types
@app.route("/fuelingStationTypes")
def countStations():
    session = Session(engine)
    results = session.query(Data.fuel_type_code, \
                            func.count(Data.fuel_type_code)).\
                            group_by(Data.fuel_type_code).all()
    session.close()

    access = list(np.ravel(results))
    return jsonify(access)

# ## Route for the station names
@app.route("/name")
def name():
    session = Session(engine)
    results = session.query(Data.station_name).all()
    #return f"This station is called {results}"
    session.close()
    all_names = list(np.ravel(results))
    return jsonify(all_names)


## Route for each city with ev stations within each state
@app.route("/cities")
def get_states():
    session = Session(engine)
    results = session.query(Data.city, Data.state).order_by(Data.state).all()
    session.close()

    all_states = []
    for cities, states in results:
        states_dict = {}
        states_dict["cities"] = cities
        states_dict["states"] = states
        all_states.append(states_dict)
    
    return jsonify(all_states)

# Count the number of charging stations each state contains
@app.route("/count")
def counter():
    session = Session(engine)
    results = session.query(Data.state, func.count(Data.state)).group_by(Data.state).all()
    session.close()

    access = list(np.ravel(results))
    return jsonify(access)

    #return f"Here are the counts of Electric Vehicle charging stations in each state: {results}"

## Route for stations that are planned vs private vs public vs unavailable
@app.route("/accessibility")
def accessible():
    session = Session(engine)
    results = session.query(Data.groups_with_access_code, \
                            func.count(Data.groups_with_access_code)).\
                            group_by(Data.groups_with_access_code).all()
    session.close()

    access = list(np.ravel(results))
    return jsonify(access)

    # private_vs_public = []
    # for access in results:
    #     access_dict = {}
    #     access_dict["access"] = access
    #     private_vs_public.append(access_dict)
    # return jsonify(private_vs_public)

if __name__ == "__main__":
    app.run(debug=True)