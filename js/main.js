var horoscope = [
  {
  	sign: "taurus",
  	image: "img/taurus3.png",
  	about: "The Taurus personality is one of the most easily recognizable of the zodiac. Positive Taurus traits include reliability, practicality, ambition, sensuality, and independence. However, they also have some negative traits and can be very lazy, stubborn, materialistic and possessive at times."
},
  {
  	sign: "capricorn",
  	image: "img/capricorn3.png",
  	about: "The Capricorn-born people are the most determined of the entire Zodiac. The most prominent qualities of the Goats, as they are called, are that they are ambitious, conservative, determined, practical and helpful."
  },
  {
  	sign: "cancer",
  	image: "img/cancer3.png",
  	about: "Cancer characteristics include creativity, spontaneity, loyalty, and generosity."
  },
  {
  	sign: "aries",
  	image: "img/aries3.png",
  	about: "The people born under the Zodiac Sign Aries are curious, energetic and enthusiastic individuals, who want to initiate and make things happen rather than being mere spectators. The need for excitement push them into new territories and makes them extremely action-oriented."
  },
  {
  	sign: "libra",
  	image: "img/libra3.png",
  	about: "The people born under the Sign Libra are kind, gentle and lovers of beauty, harmony and peace."
  },
  {
  	sign: "aquarius",
  	image: "img/aquarius3.png",
  	about: "Qualities of Aquarius : Truthfulness, Just, Curious, Affectionate Personality, Frank and Imaginative."
  },
  {
  	sign: "leo",
  	image: "img/leo3.png",
  	about: "In many ways Leos are the children of the zodiac. Fun, adventurous, genuine, generous and highly charismatic they like to be larger than life and enjoy showing off, being admired, praised and appreciated. Very playful and competitive they like to be the best in whatever they do."
  },
  {
  	sign: "scorpio",
  	image: "img/scorpio3.png",
  	about: "The Scorpio-born are strong willed and mysterious, and they know how to effortlessly grab the limelight, as they possess what it takes to achieve their goals. "
  },
  {
  	sign: "pisces",
  	image: "img/pisces3.png",
  	about: "They are generous, compassionate and extremely faithful and caring."
  },
  {
  	sign: "virgo",
  	image: "img/virgo3.png",
  	about: "Some of the positive Virgo traits include reliability, intelligence, practicability, and modesty. However, as any other zodiac sign, Virgo also has negative qualities. Some of the negative Virgo characteristics include fussiness, meticulousness, negativity, crankiness, and being overly reserved."
  },
  {
  	sign: "gemini",
  	image: "img/gemini3.png",
  	about: "Gemini can be sociable,communicative and ready for fun, while on the other hand it can be very serious, thoughtful, restless and even indecisive."
  },
  {
  	sign: "sagittarius",
  	image: "img/sagittarius3.png",
  	about: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes."
  },
]
function getInfo() {
	  var one = document.getElementById("sign").value
    

	for(i = 0; i < horoscope.length; i++) {
		if(one == horoscope[i].sign) {

			document.getElementById("message").innerHTML = "<div></div>" + horoscope[i].about 
			document.getElementById("zodiac").innerHTML = horoscope[i].sign
			document.getElementById("wallpapper").src = horoscope[i].image
			return
      } else {
			document.getElementById("message").innerHTML = "Try again!"
			
		}
	}
}






