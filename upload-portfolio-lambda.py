import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    sns = boto3.resource('sns')
    location = {
        "bucketName" : 'portfoliobuild.ealanta.net',
        "objectKey"  : 'portfoliobuild.zip'
    }
    try:
        job = event.get("CodePipeline.job")
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == 'MyAppBuild':
                    location = artifact["location"]["s3Location"]
        
        print "location is " + str(location)
        
        topic = sns.Topic('arn:aws:sns:us-east-1:492438986868:deploy-portfolio-topic')
        portfolio_bucket = s3.Bucket('portfolio.ealanta.net')
        build_bucket = s3.Bucket(location["bucketName"])
    
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location['objectKey'],portfolio_zip) 
    
        with zipfile.ZipFile(portfolio_zip) as myzip:
    	    for nm in myzip.namelist():
    		    obj = myzip.open(nm)
    		    portfolio_bucket.upload_fileobj(obj,nm,
    			    ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
    		    portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        print 'deploy portfolio job done!'
        topic.publish(Subject="Portfolio Deployed",Message="Portfolio Deployed Successfully!")
    except:
        topic.publish(Subject="Portfolio Deploy FAILED",Message="Portfolio Deployment FAILED")
        raise
    
    return 'Hello from Lambda'
