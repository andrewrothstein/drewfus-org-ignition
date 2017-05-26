{
    "ignition" : { "version": "2.0.0" },
    "storage": {
	"disks": [
	    {
		"device": "/dev/sda",
		"wipeTable": true,
		"partitions": [
		    {
			"label": "DOCKER",
			"number": 0,
			"size": 0,
			"start": 0
		    }
		]
	    }
	],
	"filesystems": [
	    {
		"mount": {
		    "device": "/dev/disk/by-partlabel/DOCKER",
		    "format": "ext4",
		    "create": {
			"force": true,
			"options": [
			    "-L",
			    "DOCKER"
			]
		    }
		}
	    }
	]
    },
    "systemd": {
	"units": [{
	    "name": "sshd.service",
	    "enable": true
	}]
    },
    "networkd": {
	"units": [{
	    "name": "01-dhcp.network",
	    "contents": "[Match]\nName=enp6s0\n\n[Network]\nDHCP=yes"
	}]
    }
}    
