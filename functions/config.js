module.exports = {

	"AutoRemediateXX-001": {
		"enabled": true
	},

	"AutoRemediateRDS-008": {
		"enabled": true
	},

	"AutoRemediateS3-001": {
		"enabled": true
	},

	"AutoRemediateConfig-001": {
		"enabled": true,
		"S3BucketName": "",
	},

	"AutoRemediateCFM-005": {
		"enabled": true
	},

	"AutoRemediateCT-001": {
		"enabled": true,
		"Name": 'GlobalTrail',
		"S3BucketName": '',
		"IncludeGlobalServiceEvents": true,
		"IsMultiRegionTrail": true,
		"S3KeyPrefix": ''
	},

	"AutoRemediateRS-001": {
		"enabled": true
	}

}
