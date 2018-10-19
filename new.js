if (navigator.permissions) {
            navigator.permissions.query({
                    name: "geolocation"
                })
                .then(function (permissionStatus) {
                    console.log(permissionStatus);

                    permissionStatus.onchange = function () {
                        console.log(this.state);
                    }
                })

            navigator.geolocation.getCurrentPosition(sucsses, wtf);

            function sucsses(position) {
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            }

            function wtf() {
                console.log("no");
            }

            // Notification.requestPermission(function (result) {
            //     if (result === "denied") {
            //         console.log("denide")
            //         return;
            //     } else if (result === "defoult") {
            //         console.log("dismissd");
            //     }
            //     console.log("ready");
            // })
        }
