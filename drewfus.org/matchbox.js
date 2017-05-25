{
    "ignition" : { "version": "2.0.0" },
    "storage": {
        "filesystems": [{
            "mount": {
                "device": "/dev/disk/by-label/ROOT",
                "format": "xfs",
                "create": {
                    "force": true,
                    "options": [ "-L", "ROOT" ]
                }
            }
        }]
    },
    "systemd": {
	"units": [{
	    "name": "sshd",
	    "enable": true,
	}]
    },
    "networkd": {
	"units": [{
	    "name": "01-dhcp.network",
	    "contents": "[Match]\nName=enp6s0\n\n[Network]\nDHCP=yes"
	}]
    },
    "passwd": {
        "users": [
            {
                "name": "core",
                "sshAuthorizedKeys": [
                    "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDIEsyW+6KxtNl3iAjSrHeRSlZh3AnaWtDM7zO/G2dAAMl/fnYeWiFOAzYKOYC5crnK3U3CscY3IIy0HYNZ5TvIRNbzamn8bn7ThTw01QJJG0qH4xJ1w3qBtOWGC4xumMg1FXAg0Qa057jMsRkepWoqLfqSyJn6f9eJ1SqK6my8AKSoCxt6fgY8xNeNAXvODKkRLl2sf5h3dRPM7RvoGCr3KNraMsGRP7qI6sEoHlrMEz06rV8hm0+FtM2Nypxzjm505zAWwmvbhq79nGEGxONqyQJs/r7noSKYNZ6tq2r6qdtISebxg+pd5YQ7nX0vSdae+togYWrpVkRTkX66LScROGMVD1YSDHVfcQRKWvkO80HWvJuVWM8uWFsQIXTiC6NnP2Q5p+/RKYOQ1/5TewSYGlY+ErAiv8rxDXhs21S/rp80Fyd/hezKUs0fm0Te8gGZrYlVpieDHDf7q6Yp4zGCeA0nfzMYoaqDGwHeeg7KHQrY3kw66xu0VMa7x9tfgPGWjYY1z2Pb53dctd/PRI7GMmdZ1UVkvNJha2DdqGxh6kAH+idHZ9uF6PW2F7DecHCTipKEb64lHa2Bn8RUmJIN6gU1+YPZgA2nH75W2Y9QWwch5ekq+LA19atbZn6u6qTXx3pGJWKVmAg6p6ugJc1OJLPqkkKHkov5fhRcIrcMbQ== drew@Andrews-MacBook-Pro-2.local"
                ]
            }
        ]
    }
}    
