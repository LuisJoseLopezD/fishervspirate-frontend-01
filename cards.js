
                // CARTA 1

                $( document ).ready(function() {

                    var images = [
                        "/img/personajes-character/01.png",
                        "/img/personajes-character/02.png",
                        "/img/personajes-character/03.png",
                        "/img/personajes-character/04.png",
                        "/img/personajes-character/05.png",
                        "/img/personajes-character/06.png",
                        "/img/personajes-character/07.png",
                        "/img/personajes-character/08.png"
                    ];
    
                    var imageIndex = 0;
    
                    $("#previous").on("click", function(){          
                        imageIndex = (imageIndex + images.length -1) % (images.length);    
                        $("#pj").attr('src', images[imageIndex]);
                    });
    
                    $("#next").on("click", function(){
                        imageIndex = (imageIndex+1) % (images.length);    
                        $("#pj").attr('src', images[imageIndex]);
                    });
    
                    $("#pj").attr(images[0]);
    
                    });
    
    
                    // CARTA 2
    
                    $( document ).ready(function() {
    
                    var images2 = [
                        "/img/personajes-ship/02.png",
                        "/img/personajes-ship/03.png",
                        "/img/personajes-ship/04.png",
                        "/img/personajes-ship/05.png",
                        "/img/personajes-ship/06.png",
                        "/img/personajes-ship/07.png",
                        "/img/personajes-ship/08.png",
                        "/img/personajes-ship/09.png"
                    ];
    
                    var imageIndex2 = 0;
    
                    $("#previous2").on("click", function(){          
                        imageIndex2 = (imageIndex2 + images2.length -1) % (images2.length);    
                        $("#pj2").attr('src', images2[imageIndex2]);
                    });
    
                    $("#next2").on("click", function(){
                        imageIndex2 = (imageIndex2+1) % (images2.length);    
                        $("#pj2").attr('src', images2[imageIndex2]);
                    });
    
                    $("#pj2").attr(images2[0]);
    
                    });
    
                    // CARTA 3
    
                    $( document ).ready(function() {
    
                    var images3 = [
                        "/img/personajes-harbour-island/02.png",
                        "/img/personajes-harbour-island/03.png",
                        "/img/personajes-harbour-island/04.png",
                        "/img/personajes-harbour-island/05.png",
                        "/img/personajes-harbour-island/06.png",
                        "/img/personajes-harbour-island/07.png",
                        "/img/personajes-harbour-island/08.png",
                        "/img/personajes-harbour-island/09.png"
                    ];
    
                    var imageIndex3 = 0;
    
                    $("#previous3").on("click", function(){          
                        imageIndex3 = (imageIndex3 + images3.length -1) % (images3.length);    
                        $("#pj3").attr('src', images3[imageIndex3]);
                    });
    
                    $("#next3").on("click", function(){
                        imageIndex3 = (imageIndex3+1) % (images3.length);    
                        $("#pj3").attr('src', images3[imageIndex3]);
                    });
    
                    $("#pj3").attr(images3[0]);
    
                    });