/**	
	* Template Name: Kevin
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. FIXED MENU
	2. FEATURED SLIDE ( TYPED SLIDER )
	3. SKILL PROGRESS BAR
	4. MENU SMOOTH SCROLLING
	5. MOBILE MENU CLOSE  
	6. PORTFOLIO GALLERY
	7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	8. CLIENT TUTORIALS ( SLICK SLIDER )
	9. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
	10. RANDOM COLOR THEME
	11. POPUP
	12. LANGAUGE SELECTION
	
**/

(function( $ ){


	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {

    if ($(window).scrollTop() > 100) {

        $('#mu-header').addClass('mu-fixed-nav');
        
	    } else {
	        $('#mu-header').removeClass('mu-fixed-nav');
	    }
	});

		
	/* ----------------------------------------------------------- */
	/*  2. FEATURED SLIDE (TYPED SLIDER)
	/* ----------------------------------------------------------- */

		var typed = new Typed('#typed', {
		    stringsElement: '#typed-strings',
		    typeSpeed: 20,
		    backSpeed: 20,
		    startDelay: 1000,
		    loop: true,
		    loopCount: Infinity
		});

		
	/* ----------------------------------------------------------- */
	/*  3. SKILL PROGRESS BAR
	/* ----------------------------------------------------------- */

		$('.mu-skill-progress-bar').appear(function() {

			$('.mu-python-bar').LineProgressbar({
				percentage: 76,
				triggerOnce: true
			});

			$('.mu-lib-bar').LineProgressbar({
				percentage: 44,
				triggerOnce: true
			});

			$('.mu-msoffice-bar').LineProgressbar({
				percentage: 89,
				triggerOnce: true
			});

			$('.mu-sql-bar').LineProgressbar({
				percentage: 33,
				triggerOnce: true
			});

			$('.mu-other-bar').LineProgressbar({
				percentage: 57,
				triggerOnce: true
			});

			$('.mu-ai-bar').LineProgressbar({
				percentage: 23,
				triggerOnce: true
			});

			$('.mu-html5-bar').LineProgressbar({
				percentage: 57,
				triggerOnce: true
			});

			$('.mu-bootstrap-bar').LineProgressbar({
				percentage: 27,
				triggerOnce: true
			});

		});



	/* ----------------------------------------------------------- */
	/*  4. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".mu-menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }           
		});


	/* ----------------------------------------------------------- */
	/*  5. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

		jQuery('.mu-menu').on('click', 'li a', function() {
		  $('.in').collapse('hide');
		});


	/* ----------------------------------------------------------- */
	/*  6. PORTFOLIO GALLERY
	/* ----------------------------------------------------------- */ 
		$('.filtr-container').filterizr();

		//Simple filter controls

	    $('.mu-simplefilter li').click(function() {
	        $('.mu-simplefilter li').removeClass('active');
	        $(this).addClass('active');
	    });

	/* ----------------------------------------------------------- */
	/*  7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
	/* ----------------------------------------------------------- */ 

	$('.mu-filter-imglink').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-fade',
	  gallery:{
	    enabled:true
	  }
	});

	/* ----------------------------------------------------------- */
	/*  8. CLIENT TUTORIALS (SLICK SLIDER)
	/* ----------------------------------------------------------- */

		$('.mu-tutorial-slide').slick({
		  arrows: false,
		  dots: true,
		  infinite: true,
		  speed: 500,
		  autoplay: true,
		  cssEase: 'linear'
		});


	/* ----------------------------------------------------------- */
	/*  9. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
	/* ----------------------------------------------------------- */

		$('.view-my-work-btn').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash,
		    $target = $(target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1000, 'swing', function () {
		        window.location.hash = target;
			});
		});

	/* ----------------------------------------------------------- */
	/*  10. RANDOM THEME AT THE PAGE REFRESH
	/* ----------------------------------------------------------- */

		$(document).ready(function() {
			// Lista dostępnych motywów
			var motywy = [
				'assets/css/theme-color/bridge-theme.css',
				'assets/css/theme-color/dark-blue-theme.css',
				'assets/css/theme-color/dark-red-theme.css',
				'assets/css/theme-color/default-theme.css',
				'assets/css/theme-color/green-theme.css',
				'assets/css/theme-color/lite-blue-theme.css',
				'assets/css/theme-color/orange-theme.css',
				'assets/css/theme-color/pink-theme.css',
				'assets/css/theme-color/purple-theme.css',
				'assets/css/theme-color/red-theme.css'
			];
		
			// Losowe wybranie motywu
			var losowyMotyw = motywy[Math.floor(Math.random() * motywy.length)];
		
			// Zmiana linku do arkusza stylów
			$('#switcher').attr('href', losowyMotyw);
		});

	/* ----------------------------------------------------------- */
	/*  11. Popup
	/* ----------------------------------------------------------- */

		$(document).ready(function(){
            $('#openBtn').click(function(){
                $('#popup').css('display', 'block');

                var txtContent = $('#txt-content');

                // Tutaj podaj ścieżkę do pliku txt
                var filePath = 'rights/LICENSE.txt';

                $.get(filePath, function(data){
                    txtContent.text(data);
                });
            });

            $('#openBtn2').click(function(){
                $('#popup').css('display', 'block');

                var txtContent = $('#txt-content');

                // Tutaj podaj ścieżkę do pliku txt
                var filePath = 'rights/CREDITS.txt';

                $.get(filePath, function(data){
                    txtContent.text(data);
                });
            });

            $('#closeBtn').click(function(){
                $('#popup').css('display', 'none');
            });
        });

		/* ----------------------------------------------------------- */
		/*  12. Language selection
		/* ----------------------------------------------------------- */
		
		$(document).ready(function(){
			$("#language-select").change(function(){
				var isChecked = $(this).prop("checked");
			
				var menuHome = $("#menu-home");
				if(isChecked){
					menuHome.text('HOME');
				} else {
					menuHome.text('DO GÓRY');
				}
			
                var menuAbout = $('#menu-about');
                if (isChecked) {
                    menuAbout.text('ABOUT ME')
					;
                } else {
                    menuAbout.text('O MNIE');
                }

                var menuProgress = $('#menu-progress');
                if (isChecked) {
                    menuProgress.html('PROGRESS')
					;
                } else {
                    menuProgress.html('POSTĘPY');
                }

                var menuTutorials = $('#menu-tutorials');
                if (isChecked) {
                    menuTutorials.html('TUTORIALS')
					;
                } else {
                    menuTutorials.html('PORADNIKI');
                }

                var menuContact = $('#menu-contact');
                if (isChecked) {
                    menuContact.html('CONTACT')
					;
                } else {
                    menuContact.html('KONTAKT');
                }

                var greeting = $('#start');
                if (isChecked) {
                    greeting.html('As a person freshly entering the world of programming and development, I am at the stage of acquiring as much knowledge as possible.<br><br>Every day I learn something new to expand my knowledge.')
					;
                } else {
                    greeting.html('Jako osoba świeżo wkraczająca w świat programowania i rozwoju jestem na etapie zdobywania jak największej wiedzy.<br><br>Każdego dnia uczę się czegoś nowego, poszerzając swoją wiedzę.');
                }
				
                var viewMyWorkBtn = $('#view-my-work-btn');
                if (isChecked) {
                    viewMyWorkBtn.html('CHECK MY WORK')
					;
                } else {
                    viewMyWorkBtn.html('ZOBACZ MOJE PRACE');
                }
				
                var aboutMe = $('#about-me');
                if (isChecked) {
                    aboutMe.html('ABOUT ME')
					;
                } else {
                    aboutMe.html('O MNIE');
                }
				
                var story = $('#about-me-story');
                if (isChecked) {
                    story.html("My name is Darek. I am self-taught <strong>Python Backend</strong> and <strong>Web Developer</strong> also <strong>AI and Big Data Lover</strong>.<br><br> I'm a third-semester extramural engineering student at WSB Merito University in Gdynia, my passion lies in Big Data, Data Engineering, AI, and backend development. <br><br>I aspire to cultivate and enhance my skills in these domains.")
					;
                } else {
                    story.html('Nazywam się Darek. Jestem samoukiem <strong>Backendu Pythona</strong> i <strong>Web Developingu</strong>, a także <strong>Miłośnikiem AI i Big Data</strong>.<br><br>Jestem studentem zaocznym trzeciego semestru student inżynierii na WSB Merito w Gdyni, moją pasją jest Big Data, inżynieria danych, sztuczna inteligencja i rozwój backendu. <br><br>Chcę rozwijać i doskonalić swoje umiejętności w tych dziedzinach.');
                }
				
                var progress = $('#skill-progress');
                if (isChecked) {
                    progress.html("Skills:")
					;
                } else {
                    progress.html('Umiejętności:');
                }
				
                var promice = $('#skill-promice');
                if (isChecked) {
                    promice.html("One day they all will be full.")
					;
                } else {
                    promice.html('Pewnego dnia one wszystkie będą pełne.');
                }
				
                var socialMedia = $('#social-media');
                if (isChecked) {
                    socialMedia.html("Social")
					;
                } else {
                    socialMedia.html('Społeczności');
                }
				
                var resumeEnglish = $('#resume-english');
                if (isChecked) {
                    resumeEnglish.html("Download My Resume (English version)")
					;
                } else {
                    resumeEnglish.html('Pobierz moje CV (wersja Angielska)');
                }

                var resumePolish = $('#resume-polish');
                if (isChecked) {
                    resumePolish.html("Download My Resume (English version)")
					;
                } else {
                    resumePolish.html('Pobierz moje CV (wersja Polska)');
                }

                var myProgress = $('#my-progress');
                if (isChecked) {
                    myProgress.html("MY PROGRESS")
					;
                } else {
                    myProgress.html('MOJE POSTĘPY');
                }

                var myProgressInfo = $('#my-progress-info');
                if (isChecked) {
                    myProgressInfo.html("I would like to warmly welcome you to my website, where I describe my progress in learning programming. This is a place where I want to share my passion for Python - a programming language that always amazes me with its countless possibilities. What's always fascinating to me is that in the world of Python I always find something new to learn.<br>Each discovery inspires me to expand my skills and explore new areas. <br><br>In the rest of the page I would like to tell you about my path in programming. I started from scratch and now, with hindsight, I can proudly share my progress with you.")
					;
                } else {
                    myProgressInfo.html('Chciałbym serdecznie powitać Cię na mojej stronie internetowej, na której opisuję moje postępy w nauce programowania. To miejsce, w którym chcę dzielić się swoją pasją do Pythona - języka programowania, który zawsze zadziwia mnie swoimi niezliczonymi możliwościami. Fascynujące dla mnie jest to, że w świecie Pythona zawsze znajduję coś nowego do nauczenia się.<br>Każde odkrycie inspiruje mnie do poszerzania swoich umiejętności i odkrywania nowych obszarów. <br><br>W dalszej części strony chciałbym opowiedzieć Ci o mojej drodze w programowaniu. Zaczynałem od zera i teraz, z perspektywy czasu, z dumą mogę podzielić się z Wami moimi postępami.');
                }

                var servicePython = $('#service-python');
                if (isChecked) {
                    servicePython.html("One thought, I know for sure. I still only know a small percentage of Python's total capabilities. Still learning new features.")
					;
                } else {
                    servicePython.html('Jedna rzecz, co wiem na pewno. Nadal znam tylko niewielki procent całkowitych możliwości Pythona. Wciąż uczę się nowych funkcji.');
                }

                var serviceWebDevelopmentTitle = $('#service-web-development-title');
                if (isChecked) {
                    serviceWebDevelopmentTitle.html("Web Development")
					;
                } else {
                    serviceWebDevelopmentTitle.html('Tworzenie stron internetowych');
                }

                var serviceWebDevelopment = $('#service-web-development');
                if (isChecked) {
                    serviceWebDevelopment.html("As a beginner, Flask was my first shoot in web dev, I know a bit of Django also I dont have any problem to find myself in Front End.")
					;
                } else {
                    serviceWebDevelopment.html('Jako początkujący, Flask był moim pierwszym podejściem do webdevu, znam trochę Django i odnajduję się w Front Endzie.');
                }

                var serviceWebDatabaseTitle = $('#service-web-database-title');
                if (isChecked) {
                    serviceWebDatabaseTitle.html("Database")
					;
                } else {
                    serviceWebDatabaseTitle.html('Bazy Danych');
                }

                var serviceWebDatabase = $('#service-web-database');
                if (isChecked) {
                    serviceWebDatabase.html("I'm still expanding my knowledge of the use of SQL. I know how to create database queries and I know tools such as MySQL / SQLite.")
					;
                } else {
                    serviceWebDatabase.html('Wciąż poszerzam swoją wiedzę z zakresu wykorzystania języka SQL. Potrafię tworzyć zapytania do baz danych i znam narzędzia takie jak MySQL/SQLite.');
                }

                var serviceOtherLanguagesTitle = $('#service-web-other-languages-title');
                if (isChecked) {
                    serviceOtherLanguagesTitle.html("Other languages")
					;
                } else {
                    serviceOtherLanguagesTitle.html('Inne języki');
                }

                var serviceOtherLanguages = $('#service-web-other-languages');
                if (isChecked) {
                    serviceOtherLanguages.html("Even though Python is my favorite, I don't see a problem with C#, PHP and Java. And I also know a little bit of R.")
					;
                } else {
                    serviceOtherLanguages.html('Mimo że Python jest moim ulubionym, nie widzę problemu w C#, PHP i Javie. Znam też trochę język R.');
                }

                var serviceDataManipulationTitle = $('#service-data-manipulation-title');
                if (isChecked) {
                    serviceDataManipulationTitle.html("Data Manipulation")
					;
                } else {
                    serviceDataManipulationTitle.html('Manipulacja danymi');
                }

                var serviceDataManipulation = $('#service-data-manipulation');
                if (isChecked) {
                    serviceDataManipulation.html("Filtering, sorting, combining, text processing, format unification and other cool features that Python provides with libraries.")
					;
                } else {
                    serviceDataManipulation.html('Filtrowanie, sortowanie, łączenie, przetwarzanie tekstu, ujednolicanie formatów i inne fajne funkcje, które Python zapewnia wraz z bibliotekami.');
                }

                var serviceAiTitle = $('#service-ai-title');
                if (isChecked) {
                    serviceAiTitle.html("Artificial intelligence")
					;
                } else {
                    serviceAiTitle.html('Sztuczna inteligencja');
                }

                var serviceAi = $('#service-data-manipulation');
                if (isChecked) {
                    serviceAi.html("I leave it for later, at this point I know how it works and what to pay attention to, I know the basics of the TensorFlow and PyTorch libraries.")
					;
                } else {
                    serviceAi.html('Zostawiam to na później, na tym etapie już wiem jak to działa i na co zwrócić uwagę, znam podstawy bibliotek TensorFlow i PyTorch');
                }

                var portfolioDescriptionTitle = $('#portfolio-description-title');
                if (isChecked) {
                    portfolioDescriptionTitle.html("MY PORTFOLIO")
					;
                } else {
                    portfolioDescriptionTitle.html('MOJE PORTFOLIO');
                }

                var portfolioDescriptionAll = $('#portfolio-description-all');
                if (isChecked) {
                    portfolioDescriptionAll.html("All")
					;
                } else {
                    portfolioDescriptionAll.html('Wszystkie');
                }

                var portfolioDescriptionWebApp = $('#portfolio-description-web-app');
                if (isChecked) {
                    portfolioDescriptionWebApp.html("Web App")
					;
                } else {
                    portfolioDescriptionWebApp.html('Aplikacje Webowe');
                }

                var portfolioDescriptionScraping = $('#portfolio-description-scraping');
                if (isChecked) {
                    portfolioDescriptionScraping.html("Scraping")
					;
                } else {
                    portfolioDescriptionScraping.html('Scraping');
                }

                var portfolioDescriptionGames = $('#portfolio-description-games');
                if (isChecked) {
                    portfolioDescriptionGames.html("Games")
					;
                } else {
                    portfolioDescriptionGames.html('Gry');
                }

                var portfolioDescriptionApps = $('#portfolio-description-apps');
                if (isChecked) {
                    portfolioDescriptionApps.html("Apps")
					;
                } else {
                    portfolioDescriptionApps.html('Aplikacje');
                }

                var portfolioDescriptionAi = $('#portfolio-description-ai');
                if (isChecked) {
                    portfolioDescriptionAi.html("AI")
					;
                } else {
                    portfolioDescriptionAi.html('SI');
                }

                var portfolioDescriptionBlog = $('#portfolio-description-blog');
                if (isChecked) {
                    portfolioDescriptionBlog.html("Blog")
					;
                } else {
                    portfolioDescriptionBlog.html('Blog');
                }

                var knowledgeInfo = $('#knowledge-info');
                if (isChecked) {
                    knowledgeInfo.html("Where do I get my knowledge?")
					;
                } else {
                    knowledgeInfo.html('Skąd biorę wiedzę?');
                }

                var knowledgeAndLotsMore = $('#and-lots-more');
                if (isChecked) {
                    knowledgeAndLotsMore.html("And lots more...")
					;
                } else {
                    knowledgeAndLotsMore.html('I wiele więcej...');
                }


                var getInTouchTitle = $('#get-in-touch-title');
                if (isChecked) {
                    getInTouchTitle.html("Get in Touch")
					;
                } else {
                    getInTouchTitle.html('Skontaktuj się ze mną');
                }

                var getInTouch = $('#get-in-touch');
                if (isChecked) {
                    getInTouch.html("I'm actively seeking opportunities to advance my career and connect with industry professionals. As a newcomer, my focus is on gaining experience and learning from experts in the field. If you're open to sharing your insights or have potential employment prospects, I'd be thrilled to hear from you. I'm receptive to any suggestions and proposals.")
					;
                } else {
                    getInTouch.html('Aktywnie poszukuję możliwości rozwoju kariery i nawiązania kontaktu ze specjalistami z branży. Jako nowicjusz skupiam się na zdobywaniu doświadczenia i uczeniu się od ekspertów w danej dziedzinie. Jeśli jesteś otwarty na podzielenie się swoimi spostrzeżeniami lub masz potencjalne perspektywy zatrudnienia, będzie mi miło, jeśli się odezwiesz. Jestem otwarty na wszelkie sugestie i propozycje.');
                }

                var getInTouchAddress = $('#get-in-touch-address');
                if (isChecked) {
                    getInTouchAddress.html("Pomeranian<br>Tricity<br>Poland")
					;
                } else {
                    getInTouchAddress.html('Pomorskie<br>Trójmiasto<br>Polska');
                }

                var creditsInfo1 = $('#credits-info-1');
                if (isChecked) {
                    creditsInfo1.html("Copyright")
					;
                } else {
                    creditsInfo1.html('Prawo autorskie');
                }

                var creditsInfo2 = $('#credits-info-2');
                if (isChecked) {
                    creditsInfo2.html("All right reserved.")
					;
                } else {
                    creditsInfo2.html('Wszystkie prawa zastrzeżone.');
                }

                var creditsInfo3 = $('#credits-info-3');
                if (isChecked) {
                    creditsInfo3.html("Special thanks to:")
					;
                } else {
                    creditsInfo3.html('Specjalne podziękowania dla:');
                }

                var creditsInfo4 = $('#credits-info-4');
                if (isChecked) {
                    creditsInfo4.html("Credits")
					;
                } else {
                    creditsInfo4.html('Napisy i formatowanie');
                }





            });
        });

		
		

	
})( jQuery );



  
	