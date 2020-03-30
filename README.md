# Welcome to EvryWebRTC!

Bonjour à tous ! Le but de ce projet était d'offrir une application de visioconférence basée sur la technologie WebRTC. Les contraintes étaient de permettre de retailler les fenêtres à la souris ainsi que de déplacer les fenêtres. De plus la gestion de la profondeur était un élément indispensable. 


# Technologies utilisées

* HTML pour la structure de la page
* CSS pour gérer la mise en page et surtout celle-ci lors des événements de redimensionnement 
* Javascript ainsi que JQuery pour mettre en place des traitements côté client (l'aspect draggable, la création d'une room, etc...)
* Node.js & Socket.io pour la création d'un serveur, gérer l'envoie d'une offre et la réception

## Lancement

Lancez la commande **node server.js** pour lancer le serveur et rendez-vous sur **https**://localhost:8080/
Une fois sur le site ce dernier va ajouter un suffixe correspondant à l'identifiant de la room sur laquelle vous êtes. Vous n'avez plus qu'à transmettre l'url à vos proches pour rentrer en communication avec eux.