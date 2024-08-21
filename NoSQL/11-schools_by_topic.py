#!/usr/bin/env python3
""" Where can I learn Python? """

import pymongo


def schools_by_topic(mongo_collection, topic):
    """ returns the list of school having a specific topic """

    documents = mongo_collection.find({"topics": topic})
    arr = [doc for doc in documents]
    return arr
