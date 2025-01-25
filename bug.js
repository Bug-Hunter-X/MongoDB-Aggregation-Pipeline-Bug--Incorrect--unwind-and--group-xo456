```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments",
    },
  },
  {
    $unwind: "$relatedDocuments",
  },
  {
    $group: {
      _id: "$_id",
      data: {
        $push: "$relatedDocuments",
      },
    },
  },
]);
```