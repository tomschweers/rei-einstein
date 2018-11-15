// For informational purposes only

// Token
const token = 'USDNMKJSTGD37SVKQQYGUHYNL756AAYUK6TB746XAD6QMR2D3CLBKAFKMNCHFLDAFT3X6GR3OAM3SDBX3EU5BEEFVJAYAM76YO5274Y';

// Create dataset
curl -X POST -H "Authorization: Bearer USDNMKJSTGD37SVKQQYGUHYNL756AAYUK6TB746XAD6QMR2D3CLBKAFKMNCHFLDAFT3X6GR3OAM3SDBX3EU5BEEFVJAYAM76YO5274Y" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data" -F "path=http://metamind.io/images/mountainvsbeach.zip" https://api.einstein.ai/v1/vision/datasets/upload/sync

{"id":1089086,"name":"mountainvsbeach","createdAt":"2018-11-12T18:52:12.000+0000","updatedAt":"2018-11-12T18:52:12.000+0000","labelSummary":{"labels":[{"id":1176086,"datasetId":1089086,"name":"Mountains","numExamples":50},{"id":1176087,"datasetId":1089086,"name":"Beaches","numExamples":49}]},"totalExamples":99,"totalLabels":2,"available":true,"statusMsg":"SUCCEEDED","type":"image","object":"dataset"}

// Get dataset
curl -X GET -H "Authorization: Bearer 7D2QRXWVQJHVGBIOYDU3S2UB6FCAFVEZ76MSKEU22K7LWX63I7IBBWKDEEFNWVU3GMCVAOBI37MFJFLAYMDJN47FVU264CBVJQ44TYY" -H "Cache-Control: no-cache" https://api.einstein.ai/v1/vision/datasets

{"object":"list","data":[{"id":1089086,"name":"mountainvsbeach","createdAt":"2018-11-12T18:52:12.000+0000","updatedAt":"2018-11-12T18:52:18.000+0000","labelSummary":{"labels":[{"id":1176086,"datasetId":1089086,"name":"Mountains","numExamples":50},{"id":1176087,"datasetId":1089086,"name":"Beaches","numExamples":49}]},"totalExamples":99,"totalLabels":2,"available":true,"statusMsg":"SUCCEEDED","type":"image","object":"dataset"}]}

// Delete dataset
curl -X DELETE -H "Authorization: Bearer 7D2QRXWVQJHVGBIOYDU3S2UB6FCAFVEZ76MSKEU22K7LWX63I7IBBWKDEEFNWVU3GMCVAOBI37MFJFLAYMDJN47FVU264CBVJQ44TYY" -H "Cache-Control: no-cache" https://api.einstein.ai/v1/vision/datasets/1089086

{"id":"C75654AURQMTLBLWG2R64BNH2Q","organizationId":"1054215","type":"DATASET","status":"QUEUED","progress":0,"message":null,"object":"deletion","deletedObjectId":"1089086"}

// Community Sentiment

curl -X POST -H "Authorization: Bearer USDNMKJSTGD37SVKQQYGUHYNL756AAYUK6TB746XAD6QMR2D3CLBKAFKMNCHFLDAFT3X6GR3OAM3SDBX3EU5BEEFVJAYAM76YO5274Y" -H "Cache-Control: no-cache" -H "Content-Type: multipart/form-data" -F "modelId=CommunitySentiment" -F "document=the presentation was great and I learned a lot"  https://api.einstein.ai/v2/language/sentiment

