db.transactions.aggregate(
	{
		$match:{productName:"kay"}
    },
   
	{
		$group:{
			_id:"$productName",
			totalRecieved:{$sum:"$in"},
			totalIssued:{$sum:"$out"}
        }
    }
)




{
    $project : { clientName : 1 , productName : 1 , transType:1 , transDate:1 } 
},