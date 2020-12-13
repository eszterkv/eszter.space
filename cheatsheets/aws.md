---
title: AWS
---

You’ll need [awscli](https://aws.amazon.com/cli/) for these.

### Deploy a static site to s3  
`aws s3 sync ./dist s3://my-repo --delete`

## Invalidate CloudFront cache  
`aws cloudfront create-invalidation --distribution-id myDistributionId --paths '/*'`
