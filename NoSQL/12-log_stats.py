#!/usr/bin/env python3
""" 12. Log stats """

from pymongo import MongoClient


if __name__ == "__main__":
    # Establish a connection to the MongoDB server
    client = MongoClient("mongodb://127.0.0.1:27017")
    nginx_collection = client.logs.nginx

    n_logs = nginx_collection.count_documents({})
    print(f'{n_logs} logs')

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print('Methods:')

    # Utilisation de compréhensions de listes pour compter les méthodes
    method_counts = [(method, nginx_collection.count_documents({"method": method})) for method in methods]
    [print(f'\tmethod {method}: {count}') for method, count in method_counts]

    status_check = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f'{status_check} status check')
