### Getting started

Just copy the source:

```bash
docker run -d -p 27017:27017 --name=mongo-db mongo:7.0.2
docker exec -i mongo-db bash -c 'mongosh compiler --quiet --eval "db.codes.find({}, {_id:0}).toArray();"' > codes.json
docker exec -i mongo-db bash -c 'mongosh compiler --quiet --eval "JSON.stringify(db.codes.find({}, {_id:0}).toArray(), null, 4);"' > codes.json
docker exec -i mongo-db bash -c 'mongoimport -d compiler -c codes --jsonArray' < codes.json


```
