from fileinput import close
from turtle import end_fill
import requests
import os

path_datafiles = os.path.join(os.pardir, "Workshops")

requests_and_files = [
    {
        'request': "https://wiki.comakingspace.de/api.php?action=ask&format=json&query=%5B%5BLocation%3A%3AWood%20Workshop%5D%5D%20%5B%5BCategory%3AMachines%5D%5D%7C%3FHas%20image%7C%3FHas%20caption%7C%3FHas%20German&utf8=1&formatversion=1",
        'file': "WoodWorkshop_Machines.json"
    },
    {
        'request': "https://wiki.comakingspace.de/api.php?action=ask&format=json&query=%5B%5BLocation%3A%3AMetal%20Workshop%5D%5D%20%5B%5BCategory%3AMachines%5D%5D%7C%3FHas%20image%7C%3FHas%20caption%7C%3FHas%20German&utf8=1&formatversion=1",
        'file': "MetalWorkshop_Machines.json"
    },
    {
        'request': "https://wiki.comakingspace.de/api.php?action=ask&format=json&query=%5B%5BLocation%3A%3AElectronics%20Room%5D%5D%20%5B%5BCategory%3AMachines%5D%5D%7C%3FHas%20image%7C%3FHas%20caption%7C%3FHas%20German&utf8=1&formatversion=1",
        'file': "ERoom_Machines.json"
    },
    {
        'request': "https://wiki.comakingspace.de/api.php?action=ask&format=json&query=%5B%5BLocation%3A%3ACNC%20Corner%5D%5D%20%5B%5BCategory%3AMachines%5D%5D%7C%3FHas%20image%7C%3FHas%20caption%7C%3FHas%20German&utf8=1&formatversion=1",
        'file': "CNC_Machines.json"
    }
]

for request_and_file in requests_and_files.__iter__():
    with open(os.path.join(path_datafiles, request_and_file['file']), 'wb') as file:
        file.write(requests.get(request_and_file['request']).content)
    file.close()
