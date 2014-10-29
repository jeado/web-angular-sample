angular.module('ngGMap', [])
	.directive('gMap', ['$timeout',function ($timeout) {
		return {
			restrict: 'EA',
			link: function (scope, iElement, iAttrs) {
				var el = document.createElement("div");
	      el.style.width = "100%";
	      el.style.height = "100%";
	      iElement.prepend(el);

	      var cordi = (iAttrs.center !== undefined) ? JSON.parse(iAttrs.center) : [37.561192, 127.030487],
	      		zoom = (iAttrs.zoom !== undefined) ? Number(iAttrs.zoom) : 8;	      

	      var map = new google.maps.Map(el, {}),
			      mapOptions = {
							center: new google.maps.LatLng(cordi[0], cordi[1]),
						  zoom: zoom,
						  mapTypeId: google.maps.MapTypeId.ROADMAP
		        };

		    iAttrs.$observe("center",function(value) {
		    	var latlng = JSON.parse(value);
		    	map.setCenter({lat:latlng[0], lng:latlng[1]});
		    });

		    iAttrs.$observe("zoom",function(value) {
		    	map.setZoom(Number(value));
		    });

        $timeout(function() {
          google.maps.event.trigger(map, "resize");
        });

        map.setOptions(mapOptions);

			}
		};
	}]);
