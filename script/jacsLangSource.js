function jacsSetLanguage(jacsCal)
	{switch (jacsCal.language)
		{case 'ar':
			// Spanish[Castellano/Argentine] (provided by Sebastian Vega)
			jacsCal.language			= 'ar';
			jacsCal.today               = 'Hoy:';
			jacsCal.drag                = 'click aqu\u00ED para arrastrar';
			jacsCal.monthNames			= ['Ene','Feb','Mar','Abr','May','Jun',
										   'Jul','Ago','Sep','Oct','Nov','Dec'];
			jacsCal.weekInits			= ['D','L','M','M','J','V','S'];
			jacsCal.invalidDateMsg      = 'La fecha ingresada es inv\u00E1lida.\n';
			jacsCal.outOfRangeMsg       = 'La fecha ingresada est\u00E1 fuera de rango.';
			jacsCal.doesNotExistMsg     = 'La fecha ingresada no existe.';
			jacsCal.invalidAlert        = ['Fecha inv\u00E1lida (',') ignorada.'];
			jacsCal.dateDisablingError  = ['Error ',' no es un objeto Fecha.'];
			jacsCal.rangeDisablingError = ['Error ',' deber\u00EDa consistir de dos elementos.'];
			break;
		 case 'br':
			// Brazilian Portuguese (provided by Rafael Pirolla)
			jacsCal.language			= 'br';
			jacsCal.today               = 'Hoje:';
			jacsCal.drag                = 'clique aqui para arrastar';
			jacsCal.monthNames			= ['Jan','Fev','Mar','Abr','Mai','Jun',
										   'Jul','Ago','Set','Out','Nov','Dez'];
			jacsCal.weekInits			= ['D','S','T','Q','Q','S','S'];
			jacsCal.invalidDateMsg      = 'A data e invalida.\n';
			jacsCal.outOfRangeMsg       = 'A data esta fora do escopo definido.';
			jacsCal.doesNotExistMsg     = 'A data nao existe.';
			jacsCal.invalidAlert        = ['Data invalida (',') ignorada.'];
			jacsCal.dateDisablingError  = ['Erro ',' n\u00E3o \u00E9 um objeto Date.'];
			jacsCal.rangeDisablingError = ['Erro ',' deveria consistir de dois elementos.'];
			break;
		case 'cr':
			// Croatian (provided by Amir Dupanović)
			jacsCal.language            = 'cr';
			jacsCal.today               = 'Danas:';
			jacsCal.drag                = 'klikni ovdje za povla\u010denje';
			jacsCal.monthNames	    	= ['Sij','Velj','O\u017eu','Tra','Svi','Lip', 
										   'Srp','Kol','Ruj','Lis','Stu','Pro'];
			jacsCal.weekInits	        = ['N','P','U','S','\u010c','P','S'];
			jacsCal.invalidDateMsg      = 'Une\u0161eni datum nije ispravan.\n';
			jacsCal.outOfRangeMsg       = 'Une\u0161eni datum je van granica.';
			jacsCal.doesNotExistMsg     = 'Une\u0161eni datum je nepostoje\u0107i.';
			jacsCal.invalidAlert        = ['Neispravan datum (',') ignoriran.'];
			jacsCal.dateDisablingError  = ['Pogre\u0161ka ',' nije Date objekt.'];
			jacsCal.rangeDisablingError = ['Pogre\u0161ka ',' se mora sastojati od dva elementa.'];
			break;
				
		case 'cz':
			// Czech (provided by Ondrej Lisy)
			jacsCal.language			= 'cz';
			jacsCal.today               = 'Dnes:';
			jacsCal.drag                = 'Pro p\u0159esun klikn\u011bte zde';
			jacsCal.monthNames			= ['Led','\u00dano','B\u0159e','Dub','Kv\u011b','\u010cer',
										   '\u010cer','Srp','Z\u00e1\u0159','\u0158\u00edj','Lis','Pro'];
			jacsCal.weekInits			= ['N','P','\u00da','S','\u010c','P','S'];
			jacsCal.invalidDateMsg      = 'Zadan\u00e9 datum nen\u00ed platn\u00fd.\n';
			jacsCal.outOfRangeMsg       = 'Zadan\u00e9 datum je mimo rozsah.';
			jacsCal.doesNotExistMsg     = 'Zadan\u00e9 datum neexistuje.';
			jacsCal.invalidAlert        = ['Neplatn\u00fd datum (',') ignorov\u00e9n.'];
			jacsCal.dateDisablingError  = ['Chyba ',' nen\u00ed objektem typu Date.'];
			jacsCal.rangeDisablingError = ['Chyba ',' mus\u00ed obsahovat dva elementy.'];
			break;
			
		case 'de':
			// German (provided by Henning Hraban Ramm)
			jacsCal.language			= 'de';
			jacsCal.today               = 'Heute:';
			jacsCal.drag                = 'zum Ziehen hier klicken';
			jacsCal.monthNames			= ['Jan','Feb','M\u00E4r','Apr','Mai','Jun',
										   'Jul','Aug','Sep','Okt','Nov','Dez'];
			jacsCal.weekInits			= ['S','M','D','M','D','F','S'];
			jacsCal.invalidDateMsg      = 'Das eingegebene Datum ist ung\u00FCltig.\n';
			jacsCal.outOfRangeMsg       = 'Das eingegebene Datum liegt au\u00DFerhalb der gesetzten Grenzen.';
			jacsCal.doesNotExistMsg     = 'Das eingegebene Datum gibt es nicht.';
			jacsCal.invalidAlert        = ['Ung\u00FCltiges Datum (',') ignoriert.'];
			jacsCal.dateDisablingError  = ['Fehler ',' ist kein Datumsobjekt.'];
			jacsCal.rangeDisablingError = ['Fehler ',' muss aus zwei Elementen bestehen.'];
			break;
		case 'es':
			// Spanish (provided by Victor Davalos)
			jacsCal.language			= 'es';
			jacsCal.today               = 'Hoy:';
			jacsCal.drag                = 'click aqu\u00ED para arrastrar';
			jacsCal.monthNames			= ['Ene','Feb','Mar','Abr','May','Jun',
										   'Jul','Ago','Sep','Oct','Nov','Dic'];
			jacsCal.weekInits			= ['D','L','M','M','J','V','S'];
			jacsCal.invalidDateMsg      = 'La fecha ingresada es inv\u00E1lida.\n';
			jacsCal.outOfRangeMsg       = 'La fecha ingresada est\u00E1 fuera de rango.';
			jacsCal.doesNotExistMsg     = 'La fecha ingresada no existe.';
			jacsCal.invalidAlert        = ['Fecha inv\u00E1lida (',') ignorada.'];
			jacsCal.dateDisablingError  = ['Error ',' no es un objeto Fecha.'];
			jacsCal.rangeDisablingError = ['Error ',' deber\u00EDa consistir de dos elementos.'];
			break;
		case 'fi':
			// Finnish (provided by Esa Ristilä)
			jacsCal.language			= 'fi';
			jacsCal.today               = 'Tänään:';
			jacsCal.drag                = 'Klikkaa tästä siirtääksesi';
			jacsCal.monthNames			= ['Tammi','Helmi','Maalis','Huhti','Touko','Kesä',
										   'Heinä','Elo','Syys','Loka','Marras','Joulu'];
			jacsCal.weekInits			= ['Su','Ma','Ti','Ke','To','Pe','La'];
			jacsCal.invalidDateMsg      = 'Annettu päiväys on virheellinen.\n';
			jacsCal.outOfRangeMsg       = 'Annettu päiväys on rajojen ulkopuolella.';
			jacsCal.doesNotExistMsg     = 'Annettua päiväystä ei ole olemassa.';
			jacsCal.invalidAlert        = ['Virheellistä päiväystä (',') ei huomioitu.'];
			jacsCal.dateDisablingError  = ['Virhe ',' ei ole Date objekti.'];
			jacsCal.rangeDisablingError = ['Virhe ',' pitäisi sisältää kaksi osaa.'];
			break;
			
		case 'fr':
			// French (provided by Alain Boute)
			jacsCal.language			= 'fr';
			jacsCal.today               = 'Aujourd\'hui:';
			jacsCal.drag                = 'D\u00E9placer le calendrier';
			jacsCal.monthNames			= ['Jan','F\u00E9v','Mar','Avr','Mai','Juin',
										   'Jui','Aou','Sep','Oct','Nov','D\u00E9c'];
			jacsCal.weekInits			= ['Di','Lu','Ma','Me','Je','Ve','Sa'];
			jacsCal.invalidDateMsg      = 'Date invalide.\n';
			jacsCal.outOfRangeMsg       = 'Date en dehors de la plage autoris\u00E9e.';
			jacsCal.doesNotExistMsg     = 'La date n\'existe pas.';
			jacsCal.invalidAlert        = ['La date (',') n\'est pas reconnue (ignor\u00E9e).'];
			jacsCal.dateDisablingError  = ['Erreur ',' n\'est pas un objet Date.'];
			jacsCal.rangeDisablingError = ['Erreur ',' doit avoir deux \u00E9l\u00E9ments.'];
			break;
		case 'it':
			// Italian (provided by Fulvio Bille')
			jacsCal.language			= 'fr';
			jacsCal.today               = 'Oggi:';
			jacsCal.drag                = 'Click per trascinare';
			jacsCal.monthNames			= ['Gen','Feb','Mar','Apr','Mag','Giu', 
										   'Lug','Ago','Set','Ott','Nov','Dic'];
			jacsCal.weekInits			= ['D','L','M','M','G','V','S'];
			jacsCal.invalidDateMsg      = 'La data inserita non è valida.\n';
			jacsCal.outOfRangeMsg       = 'La data inserita è fuori range.';
			jacsCal.doesNotExistMsg     = 'La data inserita non esiste.';
			jacsCal.invalidAlert        = ['Data non valida (',') ignorata.'];
			jacsCal.dateDisablingError  = ['Errore ',' questo non è un oggetto Date.']; 
			jacsCal.rangeDisablingError = ['Errore ',' dovrebbe avere due elementi.'];			
			break;
			
		case 'nl':
			// Dutch (provided by Kees Pijnenburg, Sebastiaan Altorf and Mark de Haan)
			jacsCal.language			= 'nl';
			jacsCal.today               = 'Vandaag:';
			jacsCal.drag                = 'klik hier om te slepen';
			jacsCal.monthNames			= ['Jan','Feb','Mar','Apr','Mei','Jun',
										   'Jul','Aug','Sep','Okt','Nov','Dec'];
			jacsCal.weekInits			= ['Z','M','D','W','D','V','Z'];
			jacsCal.invalidDateMsg      = 'De ingevoerde datum is ongeldig.\n';
			jacsCal.outOfRangeMsg       = 'De ingevoerde datum ligt buiten de ingestelde grenzen.';
			jacsCal.doesNotExistMsg     = 'De ingevoerde datum bestaat niet.';
			jacsCal.invalidAlert        = ['Ongeldige datum (',') genegeerd.'];
			jacsCal.dateDisablingError  = ['Fout ',' n\u00E3o \u00E9 is geen datum object.'];
			jacsCal.rangeDisablingError = ['Fout ',' moet uit twee elementen bestaan.'];
			break;
		case 'pl':
			// Polish (provided by Bartek Jablonski)
			jacsCal.language			= 'pl';
			jacsCal.today               = 'Dzi\u015b:';
			jacsCal.drag                = 'Kliknij aby przeci\u0105gn\u0105\u0107';
			jacsCal.monthNames			= ['Sty','Lut','Mar','Kwi','Maj','Cze',
										   'Lip','Sie','Wrz','Pa\u017a','Lis','Gru'];
			jacsCal.weekInits			= ['N','P','W','\u015a','C','P','S'];
			jacsCal.invalidDateMsg      = 'Podana data jest niepoprawna.\n';
			jacsCal.outOfRangeMsg       = 'Podana data jest poza zasi\u0119giem.';
			jacsCal.doesNotExistMsg     = 'Podana data nie istnieje.';
			jacsCal.invalidAlert        = ['Niepoprawna data (',') zignorowana.'];
			jacsCal.dateDisablingError  = ['B\u0142\u0105d ',' nie jest obiektem typu Date.'];
			jacsCal.rangeDisablingError = ['B\u0142\u0105d ',' powinien sk\u0142ada\u0107 si\u0119 z dw\u00f3ch element\u00f3w.'];
			break;
		case 'Ру':
			 //  Русский (provided by Ruslan Androsyuk)
			 jacsCal.language			 = 'Ру';
			 jacsCal.today               = 'Сегодня:';
			 jacsCal.drag                = 'Кликните чтобы перетащить';
			 jacsCal.monthNames          = ['Янв','Фев','Мар','Апр','Май','Июн',					
											'Июл','Авг','Сен','Окт','Ноя','Дек'];
			 jacsCal.weekInits			 = ['В','П','В','С','Ч','П','С'];
			 jacsCal.invalidDateMsg      = 'Неверная дата.\n';
			 jacsCal.outOfRangeMsg       = 'Введенная дата вне диапазона.';
			 jacsCal.doesNotExistMsg     = 'Введенной даты не существует.';
			 jacsCal.invalidAlert        = ['Неверная дата (',') проигнорирована.'];
			 jacsCal.dateDisablingError  = ['Ошибка ',' не является датой.'];
			 jacsCal.rangeDisablingError = ['Ошибка ',' должна состоять из двух элементов.'];
			 break;
		case 'sv':
			// Swedish (provided by Franz Granlund)
			jacsCal.language			= 'sv';
			jacsCal.today               = 'Idag:';
			jacsCal.drag                = 'Klicka här för att dra';
			jacsCal.monthNames			= ['Jan','Feb','Mar','Apr','Maj','Jun', 
										   'Jul','Aug','Sep','Okt','Nov','Dec'];
			jacsCal.weekInits			= ['S','M','T','O','T','F','L'];
			jacsCal.invalidDateMsg      = 'Det angivna datumet är ogiltigt.\n';
			jacsCal.outOfRangeMsg       = 'Det angivna datumet är utanför gränserna.';
			jacsCal.doesNotExistMsg     = 'Det angivna datumet existerar inte.';
			jacsCal.invalidAlert        = ['Ogiltigt datum (',') ignorerat.'];
			jacsCal.dateDisablingError  = ['Fel ',' är inte ett Date objekt.']; 
			jacsCal.rangeDisablingError = ['Fel ',' borde bestå av två element.'];			
			break;
			
		default:
			// English
			jacsCal.language			= 'en';
			jacsCal.today               = 'Today:';
			jacsCal.drag                = 'click here to drag';
			jacsCal.monthNames			= ['Jan','Feb','Mar','Apr','May','Jun',
										   'Jul','Aug','Sep','Oct','Nov','Dec'];
			jacsCal.weekInits			= ['S','M','T','W','T','F','S'];
			jacsCal.invalidDateMsg      = 'The entered date is invalid.\n';
			jacsCal.outOfRangeMsg       = 'The entered date is out of range.';
			jacsCal.doesNotExistMsg     = 'The entered date does not exist.';
			jacsCal.invalidAlert        = ['Invalid date (',') ignored.'];
			jacsCal.dateDisablingError  = ['Error ',' is not a Date object.'];
			jacsCal.rangeDisablingError = ['Error ',' should consist of two elements.'];
		}
	}