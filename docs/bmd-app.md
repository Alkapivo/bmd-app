# bmd-app
 - *stack*: hugo js
 - *theme*: terminal,
 - *components*: 
    - welcome -> komunikat powitalny, "bmd welcome"
    - map -> mapa budów
    - news -> posty
    - object -> widok na budowę. Zdjęcia + tekst = markdown
    - aboutus -> formularz kontaktowy
 - *service*:
    - news-service -> każdy post to markdown w jsonowej bazie
 - *media*: 
    - jpg
    - 360-jpg
    - mp4

# trello tasks
 - initialize repository - utworzyć repozytorium na github oraz zainicjalizować projekt npm/ts
 - install/hugo js - dodać do projektu framework hugo js
 - import/bmd-app.theme - dodać do projektu motyw `terminal`
 - api/welcome-component - mockup powitalnego ekranu
 - api/map-component - mockup podglądu mapy/budów
 - api/news-component - mockup podglądu newsów
 - api/object-component - mockup podglądu na pojedynczy "obiekt" (most, bobrowisko, ścieżka w lesie, itd.)
 - api/news-service - model danych + endpointy
 - implement/news-service - @relyOn(api/news-service) zaimplementowanie api
 - implement/media-viewer - podgląd static-media (jpg, 360-jpg, mp4)
 - test/map-component - implementacja unit test
 - test/news-component - implementacja unit test
 - test/news-service - implementacja unit test
 - research/map-service - przegląd popularnych map-viewer (np. mapbox, google maps itd.)
 - setup/test-env - przygotowanie środowiska testowego
 - setup/test-env/clcd - przygotowanie CL/CD
 - feature/theme customization - poszerzenie motywu `terminal` o bardziej dopasowany do BMD styl.



