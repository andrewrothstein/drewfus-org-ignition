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
		"name": "docker",
		"mount": {
		    "device": "/dev/sda",
		    "format": "ext4",
		    "create": {
			"force": true
		    }
		}
	    }
	]
    },
    "systemd": {
	"units": [
	    {
		"name": "sshd.service",
		"enable": true
	    },
	    {
		"name": "var-lib-docker.mount",
		"enable": true,
		"contents": "[Unit]\nDescription=Mount /dev/sda to /var/lib/docker\n\n[Mount]\nWhat=/dev/sda\nWhere=/var/lib/docker\nType=ext4\n[Install]\nWantedBy=multi-user.target\n"
	    },
	    {
		"name": "docker.service",
		"dropins": [
		    {
			"name": "10-wait-docker.conf",
			"contents": "[Unit]\nAfter=var-lib-docker.mount\nRequires=var-lib-docker.mount"
		    }
		]
	    }
	]
    },
    "networkd": {
	"units": [{
	    "name": "01-dhcp.network",
	    "contents": "[Match]\nName=enp6s0\n\n[Network]\nDHCP=yes"
	}]
    }
}    
