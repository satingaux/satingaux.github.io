	
$(document).ready(function(){
		//featuredWorks section
		for(var i = 0; i < featuredWorks.length; i += 2){

			$("#work1").append("\
				<div class='row'>\
					<div class='col-md-6 col-xs-12 col-sm-6 left-column'>\
						<div class='card-container hvr-float'>\
							<a href='"+ featuredWorks[i].url +"'class='work-img' target='_blank'>\
								<div class='overlay'>\
									<h2> "+ featuredWorks[i].title +" </h2>\
									<h4> "+ featuredWorks[i].type +" </h4>\
								</div>\
								<img style='box-shadow: 0 0 0 0 rgba(0,0,0,0.12), 0 9px 25px 1px rgba(0,0,0,0.12), 0 10px 45px 0 rgba(0,0,0,0.12);'  class='img-responsive' src='"+ featuredWorks[i].pic +"'>\
							</a>\
							<div class='card-details'>\
								<p> "+ featuredWorks[i].date +"</p>\
								<h2><a href='"+ featuredWorks[i].url +"' target='_blank'> "+ featuredWorks[i].desc +" </a></h2>\
							</div>\
						</div>\
					</div>\
					<div class='col-md-6 col-xs-12 col-sm-6 right-column'>\
						<div class='card-container hvr-float'>\
							<a href='"+ featuredWorks[i+1].url +"'class='work-img' target='_blank'>\
								<div class='overlay'>\
									<h2> "+ featuredWorks[i+1].title +" </h2>\
									<h4> "+ featuredWorks[i+1].type +" </h4>\
								</div>\
								<img style='box-shadow: 0 0 0 0 rgba(0,0,0,0.12), 0 9px 25px 1px rgba(0,0,0,0.12), 0 10px 45px 0 rgba(0,0,0,0.12);' class='img-responsive' src='"+ featuredWorks[i+1].pic +"'>\
							</a>\
							<div class='card-details'>\
								<p> "+ featuredWorks[i+1].date +"</p>\
								<h2><a href='"+ featuredWorks[i+1].url +"' target='_blank'> "+ featuredWorks[i+1].desc +" </a></h2>\
							</div>\
						</div>\
					</div>\
				</div>\
				");
		};



		//communityProjects
		for(var i = 0; i < communityProjects.length; i += 2){

			$("#work2").append("\
				<div class='row'>\
					<div class='col-md-6 col-xs-12 col-sm-6 left-column'>\
						<div class='card-container hvr-float'>\
							<a href='"+ communityProjects[i].url +"'class='work-img' target='_blank'>\
								<div class='overlay'>\
									<h2> "+ communityProjects[i].title +" </h2>\
									<h4> "+ communityProjects[i].type +" </h4>\
								</div>\
								<img style='box-shadow: 0 0 0 0 rgba(0,0,0,0.12), 0 9px 25px 1px rgba(0,0,0,0.12), 0 10px 45px 0 rgba(0,0,0,0.12);' class='img-responsive' src='"+ communityProjects[i].pic +"'>\
							</a>\
							<div class='card-details'>\
								<p> "+ communityProjects[i].date +"</p>\
								<h2><a href='"+ communityProjects[i].url +"' target='_blank'> "+ communityProjects[i].desc +" </a></h2>\
							</div>\
						</div>\
					</div>\
					<div class='col-md-6 col-xs-12 col-sm-6 right-column'>\
						<div class='card-container hvr-float'>\
							<a href='"+ communityProjects[i+1].url +"'class='work-img' target='_blank'>\
								<div class='overlay'>\
									<h2> "+ communityProjects[i+1].title +" </h2>\
									<h4> "+ communityProjects[i+1].type +" </h4>\
								</div>\
								<img style='box-shadow: 0 0 0 0 rgba(0,0,0,0.12), 0 9px 25px 1px rgba(0,0,0,0.12), 0 10px 45px 0 rgba(0,0,0,0.12);' class='img-responsive' src='"+ communityProjects[i+1].pic +"'>\
							</a>\
							<div class='card-details'>\
								<p> "+ communityProjects[i+1].date +"</p>\
								<h2><a href='"+ communityProjects[i+1].url +"' target='_blank'> "+ communityProjects[i+1].desc +" </a></h2>\
							</div>\
						</div>\
					</div>\
				</div>\
				");
			};
});