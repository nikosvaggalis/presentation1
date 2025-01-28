'use client';

import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'index.css'
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import { Card } from '@/components/ui/card';



const CancerCarePresentation: React.FC = () => {
  useEffect(() => {

      window.Reveal = Reveal;
  const loadReveal = async () => {
      const Reveal = (await import('reveal.js')).default;
	      const RevealZoom = (await import('reveal.js/plugin/zoom/zoom')).default;

    Reveal.initialize({
      controls: true,
      progress: true,
      center: true,
      hash: true,
      width: "100%",
      height: "100%",
      margin: 0.04,
	  plugins: [ RevealZoom ]
  
    });

   
  }
    loadReveal();

  }, []);

  return (
   <div className="reveal space-y-8 p-72 max-w-4xl mx-auto">
      <div className="slides">

        {/* Title Slide */}
        <section>
      <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-blue-800">Ολοκληρωμένο Σύστημα Φροντίδας Ογκολογικών-Αιματολογικών Ασθενών</h1>
        </div>
		<img 
                src="/images/idika.png" 
                alt="Information System Diagram" 
                className="w-full rounded shadow-lg"
              />
      </Card>

 
        </section>

        {/* Basic Systems */}
        <section>
           <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Εφαρμογές</h2>
        <div className="grid gap-4 text-left">
          <div className="p-3 bg-blue-50 rounded">1. Εθνικό Μητρώο Νεοπλασματικών Νοσημάτων (ΕΜΝΝ)</div>
          <div className="p-3 bg-blue-50 rounded">2. Ογκολογικό - Αιματολογικό Πληροφοριακό Σύστημα</div>
          <div className="p-3 bg-blue-50 rounded">3. Σύστημα Εποπτείας και Ανάλυσης Δεδομένων (ΒΙ)</div>
          <div className="p-3 bg-blue-50 rounded">4. Ψηφιακά Εργαλεία Υποστήριξης Ασθενών</div>
          <div className="p-3 bg-blue-50 rounded">5. Εργαλείο πολυεπιστημονικού συμβουλίου όγκων (MDT)</div>
          <div className="p-3 bg-blue-50 rounded">6. Υποσύστημα διαλειτουργικότητας</div>
        </div>
      </Card>
        </section>

        {/* Benefits Section */}
        <section>
         {/* Benefits Slide */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Οφέλη</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Citizens Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                
              </div>
              <h3 className="text-xl font-bold text-blue-800">Πολίτες</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Η βελτίωση της ποιότητας των παρεχόμενων υπηρεσιών υγείας μέσω της χρήσης νέων τεχνολογιών</span>
              </div>
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Η προστασία και η βελτίωση της υγείας του πληθυσμού και ιδιαίτερα των ευπαθών ομάδων</span>
              </div>
              <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ο έλεγχος, η πρόληψη και η διαχείριση των υψηλού φορτίου νοσημάτων</span>
              </div>
            </div>
          </div>

          {/* Healthcare Professionals Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
			<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
               
              </div>
              <h3 className="text-xl font-bold text-green-800">Επαγγελματίες Υγείας</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-green-50 rounded-lg">
                <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Την χρήση νέων καινοτόμων τεχνολογιών που θα διευκολύνουν το έργο τους</span>
              </div>
              <div className="flex items-start p-3 bg-green-50 rounded-lg">
                <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ψηφιακή ετοιμότητα και αποδέσμευση από την γραφειοκρατία ώστε να μπορούν να διαθέτουν τον πολύτιμο χρόνο τους στην περίθαλψη των ασθενών τους</span>
              </div>
              <div className="flex items-start p-3 bg-green-50 rounded-lg">
                <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Εναρμόνιση πρακτικών με τις διεθνείς και ευρωπαϊκές οδηγίες</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
        </section>

        {/* Current State Section */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">1. Εθνικό Μητρώο Νεοπλασματικών Νοσημάτων (ΕΜΝΝ)</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Η κατάσταση τώρα:</h3>
                  <p>Δεν υπάρχει επίσημη συστηματική καταγραφή νεοπλασιών σε εθνικό ή τοπικό.</p>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Τι προβλήματα δημιουργεί αυτό;</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Αδύνατη η στοιχειώδης παρακολούθηση των βασικών επιδημιολογικών δεικτών της νόσου</li>
                    <li>Η χώρα να μην εκπροσωπείται, όπως οφείλει,  στους διεθνείς οργανισμούς, όπως στο Ευρωπαϊκό Δίκτυο Μητρώων Καρκίνου </li>
                  </ul>
                </div></div>
            </Card>
        </section>
		
		  <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">1α.</span> Τι θα αλλάξει με το νέο Μητώο;</h2>
                   <h3 className="font-semibold mb-2">Δημιουργία Μητρώου το οποίο θα ενημερώνεται από όλες τις μονάδες υγείας της χώρας, θα διασυνδέεται με:</h3>
				  <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded">Εθνικό Ηλεκτρονικό Φάκελο Υγείας </div>
                    <div className="p-3 bg-blue-50 rounded">Ογκολογικό-Αιματολογικό Πληροφοριακό Σύστημα</div>
                    <div className="p-3 bg-blue-50 rounded">Ευρωπαϊκό Σύστημα Πληροφόρησης για τον Καρκίνο (European Cancer Information System – ECIS)</div>
              			  </div> 
				<div className="space-y-4 font-semibold mb-2"> 
				<br />
				και θα περιλαμβάνει το σύνολο των πληροφοριών που είναι απαραίτητες <br /> για την παρακολούθηση των βασικών επιδημιολογικών δεικτών της νόσου  
                </div>				
            </Card>
        </section>
		
		
		  <section>
            <Card className="p-6">
			                <div className="bg-blue-50 p-4 rounded shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">1β.</span> Σκοπός</h2>
                 	<ul className="list-disc pl-6 space-y-8">
                      <li>Τον αποδοτικότερο σχεδιασμό των παρεμβάσεων αντιμετώπισης και πρόληψης</li>
                    <li>Συμμόρφωση με τις κατευθυντήριες οδηγίες του Ευρωπαϊκού Δικτύου Μητρώων Καρκίνου (European Network of Cancer Registries) που προτείνει την  : 
					<p style={{marginLeft: 15+'px'}}>
					εναρμόνιση των κρατών-μελών με ένα κοινό σύνολο   δεδομένων, κωδικοποιήσεων και ελέγχων ποιότητας, προκειμένου να διασφαλιστεί ένα ελάχιστο επίπεδο ομοιογένειας που θα επιτρέψει την αξιοποίηση των δεδομένων σε ευρωπαϊκό επίπεδο</p>
					</li>
				</ul>					
				</div>
            </Card>
        </section>
		
		  <section>
            <Card className="p-6">
			                <div className="bg-blue-50 p-4 rounded shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">1γ.</span> Εμβέλεια</h2>
			  <p>Το μητρώο θα έχει Εθνική εμβέλεια. <br /><br />Θα ενημερώνεται από όλες τις μονάδες υγείας της χώρας, θα διασυνδέεται με τον Εθνικό Ηλεκτρονικό Φάκελο Υγείας, και θα περιλαμβάνει το σύνολο των πληροφοριών που είναι απαραίτητες για την παρακολούθηση των βασικών επιδημιολογικών δεικτών της νόσου.
			 </p>
				</div>
            </Card>
        </section>
		

 <section>
          <div className="max-w-4xl mx-auto">
            <Card className="p-4 " >
              <img 
                src="/images/0.png" 
                alt="Information System Diagram" 
                className="w-full rounded shadow-lg " 
              />
            </Card>
          </div>
        </section>
		
        {/* Information System Purpose */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">2. Ογκολογικό - Αιματολογικό Πληροφοριακό Σύστημα</h2>
                   <h3 className="font-semibold mb-2">Σκοπός:</h3>
                  <p className="mb-2">Την παρακολούθηση όλων των σταδίων της πορείας του ασθενούς:</p>
				  <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded">Διάγνωση</div>
                    <div className="p-3 bg-blue-50 rounded">Θεραπεία (χημειοθεραπεία/ανοσοθεραπεία, ακτινοθεραπεία, χειρουργική επέμβαση)</div>
                    <div className="p-3 bg-blue-50 rounded">Παρακολούθηση της εξέλιξης θεραπείας</div>
                    <div className="p-3 bg-blue-50 rounded">Παρακολούθηση μετά την ίαση</div>
              			  </div> 
            </Card>
        </section>

        {/* Implementation */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800 "><span className="text-1xl text-blue-800">2α.</span> Πως;</h2>
              <div className="space-y-4 ">
                   <div className="grid grid-cols-2 gap-4 ">
                    <div className="p-3 rounded bg-green-50">Με την ενιαία <strong>πρόσβαση στις κλινικές πληροφορίες</strong> και τα δεδομένα θεραπείας των ασθενών μεταξύ των Νοσοκομείων του Έργου καθώς και της διαλειτουργικότητας με τις βασικές εθνικές ψηφιακές υποδομές</div>
                   <div className="p-3 rounded bg-green-50">Με την υποστήριξη των <strong>Διεπιστημονικών Ομάδων/Ογκολογικών Συμβουλίων</strong> (MDT) και τελικά των θεραπόντων ιατρών, στη λήψη θεραπευτικών αποφάσεων</div>
                    <div className="p-3 rounded bg-green-50">Με την υποστήριξη της <strong>αντινεοπλασματικής θεραπείας</strong> σε όλα τα στάδια, από τον σχεδιασμό σύμφωνα με τα <strong>Θεραπευτικά Πρωτόκολλα</strong></div>
                    <div className="p-3 rounded bg-green-50">Με την <strong>συλλογή υψηλής ποιότητας δεδομένων</strong> που μπορούν να αξιοποιηθούν τόσο για χάραξη πολιτικής όσο και για επιστημονική έρευνα</div>
                  </div>
				</div>
            </Card>
        </section>

  {/* System Diagram */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="p-4">
              <img 
                src="/images/1.png" 
                alt="Information System Diagram" 
                className="w-full rounded shadow-lg"
              />
            </Card>
          </div>
        </section>
		
        {/* System Features */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">2β.</span> Βασικά Χαρακτηριστικά</h2>
				 <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded">Ταυτοποίηση ασθενών με ΑΜΚΑ</div>
                    <div className="p-3 bg-blue-50 rounded">Παρακολούθηση ασθενών σε όλες τις επαφές τους με το Νοσοκομείο (επισκέψεις σε Εξωτερικά Ιατρεία, Επείγοντα, Ημερήσιες Νοσηλείες, Εισαγωγές)</div>
                    <div className="p-3 bg-blue-50 rounded">Κεντρική διαχείριση του Μητρώου Φαρμάκων και των Θεραπευτικών Πρωτοκόλλων</div>
                  </div>
            </Card>
        </section>
		
		  <section>
            <Card className="p-6">
			                <div className="bg-blue-50 p-4 rounded shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">2γ.</span> Εμβέλεια</h2>
			  <h3 >Το σύστημα θα εφαρμοστεί πιλοτικά σε τρία (3) νοσοκομεία, ενώ στη συνέχεια θα υλοποιηθεί σε ακόμα εννέα (9), 
			  ώστε τελικά να καλύπτονται συνολικά δώδεκα (12)</h3>
                 	<ul className="list-disc pl-6 space-y-4">
                      <li>Γενικό Αντικαρκινικό – Ογκολογικό Νοσοκομείο Αθηνών «ΑΓΙΟΣ ΣΑΒΒΑΣ»</li>
<li>«ΜΕΤΑΞΑ» Αντικαρκινικό Νοσοκομείο Πειραιά</li>
<li>«ΑΤΤΙΚΟΝ» Πανεπιστημιακό Γενικό Νοσοκομείο</li>
<li>«ΘΕΑΓΕΝΕΙΟΝ» Αντικαρκινικό Νοσοκομείο Θεσσαλονίκης</li>
<li>Περιφερειακό Πανεπιστημιακό Γενικό Νοσοκομείο Ηρακλείου, Κρήτη</li>
<li>Πανεπιστημιακό Γενικό Νοσοκομείο Ρίου – Πατρών «Παναγιά η Βοήθεια»</li>
<li>Περιφερειακό Πανεπιστημιακό Γενικό Νοσοκομείο Ιωαννίνων</li>
<li>Πανεπιστημιακό Γενικό Νοσοκομείο Λάρισας</li>
<li>Γενικό Ογκολογικό Νοσοκομείο Κηφισιάς, «ΟΙ ΑΓΙΟΙ ΑΝΑΡΓΥΡΟΙ»</li>
<li>Γ.Ν.Θ. «Γ. ΠΑΠΑΝΙΚΟΛΑΟΥ»</li>
<li>Νοσοκομείο «ΠΑΠΑΓΕΩΡΓΙΟΥ»</li>
<li>Γενικό Νοσοκομείο Αθηνών «Ο ΕΥΑΓΓΕΛΙΣΜΟΣ»    </li>                
					
				</ul>					
				</div>
            </Card>
        </section>

        {/* BI System */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">3. Σύστημα Εποπτείας και Ανάλυσης Δεδομένων (ΒΙ)</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Σκοπός:</h3>
                  <p>Ανάλυση μεγάλου όγκου δεδομένων με σκοπό την αξιολόγηση και προσαρμογή των πρακτικών ογκολογικής θεραπείας και τη χάραξη πολιτικών και την εξοικονόμηση κόστους για το σύστημα υγείας</p>
                </div>
                <div className="bg-green-50 p-4 rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Πως;</h3>
                  <p className="mb-2">Με την παροχή προηγμένων, έτοιμων, εξειδικευμένων εργαλείων:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dashboards</li>
                    <li>Reports</li>
                    <li>AI Watson.x</li>
                  </ul>
                </div></div>
            </Card>
        </section>

        {/* Watson.x Capabilities */}
        <section>
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">3α.</span> Power of AI with IBM Watson.x</h2>
              <div className="space-y-4">
                <div className="bg-white/80 p-4 rounded shadow-sm">
                  <ul className="list-disc pl-6 space-y-8">
                    <li>Eπιτρέπει στους χρήστες να μειώσουν ή να εξαλείψουν την εξάρτηση τους από τα IT τμήματα για BI εργασίες που θέλουν να πραγματοποιήσουν, παρέχοντας περισσότερες επιλογές αυτοεξυπηρέτησης.</li>
                    <li>Εντοπίζει φαινόμενα και συσχετίσεις μεταξύ δεδομένων που ισχύουν σε ευρεία κλίμακα, ώστε να μετατραπούν σε βάση για λήψη κλινικών αποφάσεων για τη θεραπεία του καρκίνου</li>
                    <li>Δυνατότητα δημιουργίας υποθετικών σεναρία εναλλακτικών προβλέψεων που αντικατοπτρίζονται άμεσα σε διαγράμματα, αναφορές και dashboards</li>
                  </ul>
                </div></div>
            </Card>
        </section>

      
        {/* Watson Interface */}
        <section>
          <div className="max-w-4xl mx-auto">
            <Card className="p-4">
              <img 
                src="/images/2.png" 
                alt="Watson.x Interface" 
                className="w-full rounded shadow-lg"
              />
            </Card>
          </div>
        </section>
		
	

        {/* Digital Tools Section */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">4. Ψηφιακά Εργαλεία Υποστήριξης Ασθενών</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded shadow-sm">
                  <h3 className="font-semibold mb-2">Σκοπός:</h3>
                  <ul className="list-disc pl-6 space-y-8">
                    <li>Η συνεχής υποστήριξη των ασθενών, η αναβάθμιση της παρεχόμενης φροντίδας και τελικά η βελτίωση της ποιότητας ζωής τους</li>
                    <li>Η καθημερινή διαχείριση της νόσου του ασθενή, η μείωση του άγχους του και η ενίσχυση του αισθήματος ασφάλειας</li>
                  </ul>
                </div></div>
            </Card>
        </section>

        {/* eHealthPass App */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">4α.</span> Εφαρμογή eHealthPass για κινητές συσκευές</h2>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/3.png" 
                  alt="ehealth1" 
                  className="w-full rounded shadow-lg"
                />
                <img 
                  src="/images/4.png" 
                  alt="ehealth2" 
                  className="w-full rounded shadow-lg"
                />
              </div>
            </Card>
        </section>

        {/* eHealthPass Features */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">4β.</span> Λειτουργίες της εφαρμογής:</h2>
              <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded">Διαβαθμισμένη πρόσβαση του ασθενούς στα δεδομένα του (εργαστηριακά αποτελέσματα, στοιχεία φακέλου κ.λ.π.)</div>
                    <div className="p-3 bg-blue-50 rounded">Δυνατότητα επικοινωνίας με το θεράποντα ιατρό/ομάδα υποστήριξης για ερωτήσεις/συμβουλές. Η επικοινωνία γίνεται μέσω τηλε-συνεδρίας ή γραπτών κειμένων (chat)</div>
                    <div className="p-3 bg-blue-50 rounded">Δυνατότητα καταχώρησης παρενεργειών φαρμάκων και χημειοθεραπείων προς την θεραπευτική ομάδα του ασθενή</div>
                   <div className="p-3 bg-blue-50 rounded">Πρόγραμμα θεραπείας με δυνατότητα υπενθύμισης για τα επερχόμενα θεραπευτικά συμβάντα</div>
                    <div className="p-3 bg-blue-50 rounded">Δυνατότητα αυτοαναφοράς κατάστασης/συμπτωμάτων μέσω ερωτηματολογίων</div>
                  
                </div>
              </div>
            </Card>
        </section>

        {/* MDT Tool Section */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">5. Εργαλείο πολυεπιστημονικού συμβουλίου όγκων (MDT)</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded shadow-sm">
                  <p className="mb-4">Η ολοκληρωμένη θεραπεία ογκολογικών ασθενών απαιτεί τη συνεργασία μεταξύ πολλαπλών ιατρικών ειδικοτήτων και τη λήψη αποφάσεων, με συνδυασμό της εμπειρίας και των γνώσεων ιατρών με διαφορετική ειδίκευση.</p>
                  <div className="bg-green-50 p-4 rounded shadow-sm">
				  <h3 className="font-semibold mb-2">Σκοπός:</h3>
                  <ul className="list-disc pl-6 space-y-6">
                    <li>Iατροί διαφορετικών ειδικοτήτων να αποκτούν πρόσβαση στα δεδομένα του ασθενούς</li>
                    <li>Eπιλογή της πιο κατάλληλης και αποτελεσματικής θεραπείας για καρκινοπαθείς, λαμβάνοντας υπόψη τη σταδιοποίηση του όγκου και την ταξινόμησή του μαζί με τα συνολικά κλινικά χαρακτηριστικά.</li>
                  </ul>
                </div>
				</div>
              </div>
            </Card>
        </section>

        {/* MDT Implementation */}
        <section>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-blue-800"><span className="text-1xl text-blue-800">5α.</span> Με το υποσύστημα θα γίνεται:</h2>
                <div className="p-4 rounded shadow-sm grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded font-bold">Δημιουργία Συνεδρίασης Του Ογκολογικού Συμβουλίου</div>
                    <div className="p-3 bg-blue-50 rounded"><span className="font-bold">Διαχείριση Των Συνέδριων Του Ογκολογικού Συμβουλίου</span>
                      <ul className="list-disc pl-6 mt-2 space-y-4" style={{marginTop: 15+'px'}}>
                        <li>Προετοιμασία των περιστατικών προς συζήτηση</li>
                        <li>Γραμματειακή υποστήριξη: προετοιμασία ατζέντας, πρακτικά</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-blue-50 rounded "><span className="font-bold">Λήψη Αποφάσεων μέσω εξειδικευμένου εργαλείου</span>
					<ul className="list-disc pl-6 mt-2 space-y-4" style={{marginTop: 15+ 'px'}}>
                        <li>Βασισμένο σε διεθνή πρωτόκολλα</li>
                        <li>Διασύνδεση με το υποσύστημα της Τεχνητής Νοημοσύνης (ΑΙ)</li>
						</ul>
                  </div>
                </div>
            </Card>
        </section>

        {/* Interoperability Section */}
        <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">6. Υποσύστημα διαλειτουργικότητας</h2>
                    <div className="space-y-4">
 <div className="grid grid-cols-2 gap-4">
	  <div className="p-3 bg-blue-50 rounded ">Ανοιχτά, διεθνή και αναγνωρισμένα πρότυπα για την ανταλλαγή δεδομένων</div>
<div className="p-3 bg-blue-50 rounded"><span className="font-bold">Διαθεσιμότητα του συνόλου δεδομένων:</span>
                      <ul className="list-disc pl-6 mt-2">
                        <li>στοιχεία διάγνωσης</li>
                        <li>στάδιο νόσου</li>
                        <li>ιστολογικές διαγνώσεις</li>
                        <li>συνοσηρότητες</li>
                        <li>απεικονιστικές εξετάσεις</li>
                        <li>στοιχεία θεραπείας</li>
                      </ul>
                    </div>
					
                    <div className="p-3 bg-blue-50 rounded "> 
					<span className="font-bold">Συλλογή δεδομένων από τα τοπικά συστήματα του Νοσοκομείου μέσω διαλειτουργικότητας : </span>
					           <ul className="list-disc pl-6 mt-2">
                        <li>Μητρώο Ασθενών Νοσοκομείου</li>
                        <li>Ιατρικός Φάκελος</li>
                        <li>Εργαστηριακά Υποσυστήματα</li>
                        <li>PACS</li>
                        <li>Διαχείριση Ακτινοθεραπειών</li>
                        <li>Ογκολογικό Σύστημα  Διαχείρισης Aντινεοπλασματικών θεραπειών </li>
                      </ul>
                    </div>
					
						  <div className="p-3 bg-blue-50 rounded ">Ηλεκτρονική ανταλλαγή των δεδομένων με τρίτα συστήματα</div>

              </div>
			   </div>
            </Card>
        </section>

        {/* Final Goals */}
        <section>
             <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">7. Σύνοψη</h2>
        <div className="space-y-3">
                    <p className="text-left p-2 bg-white/80 rounded">✓ Αποδοτικότερος σχεδιασμός παρεμβάσεων αντιμετώπισης και πρόληψης</p>
                    <p className="text-left p-2 bg-white/80 rounded">✓ Αποτίμηση πολιτικών με στόχο την βελτιστοποίησή τους</p>
                    <p className="text-left p-2 bg-white/80 rounded">✓ Αναβάθμιση της παρεχόμενης φροντίδας, βελτίωση της ποιότητας ζωής των ασθενών</p>
                    <p className="text-left p-2 bg-white/80 rounded">✓ Πρόσβαση σε όλα τα σημαντικά κλινικά δεδομένα του ασθενούς</p>
                    <p className="text-left p-2 bg-white/80 rounded">✓ Παροχή μοντέρνων εργαλείων στο Ιατρικό Προσωπικό</p>
                    <p className="text-left p-2 bg-white/80 rounded">✓ Εναρμόνιση με Ευρωπαϊκά πρότυπα</p>
                    <p className="text-left p-2 bg-white/80 rounded">✓ Ενδυνάμωση έρευνας</p>
                </div>
            </Card>
        </section>

{/* Readiness */}
      <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">8. Βελτίωση της Ψηφιακής Ετοιμότητας των Νοσοκομείων</h2>
                    <div className="space-y-4">
 <div className="grid grid-cols-2 gap-4">
	  <div className="p-3 bg-blue-50 rounded ">Αναβάθμιση πληροφοριακών συστημάτων & υποδομών νοσοκομείων</div>
<div className="p-3 bg-blue-50 rounded"><span className="font-bold">Παρεμβάσεις σε Λογισμικά εφαρμογών:</span>
                      <ul className="list-disc pl-6 mt-2 space-y-4">
                        <li>Κάλυψη εθνικού επιπέδου αναφοράς ψηφιακής ετοιμότητας (National Digital
             Readiness Baseline)</li>
                        <li>Υλοποίηση/προμήθεια λοιπών λογισμικών εφαρμογών για τις ανάγκες των
             μονάδων υγείας</li>
                      
                      </ul>
                    </div>
					
                    <div className="p-3 bg-blue-50 rounded "> 
					<span className="font-bold">Παρεμβάσεις που αφορούν σε αναβάθμιση υλικοτεχνικών υποδομών: </span>
					           <ul className="list-disc pl-6 mt-2 space-y-4">
                        <li>Δικτυακές και υπολογιστικές υποδομές</li> 
                        <li>Υποδομές ασφάλειας συστημάτων και δεδομένων</li>
                        <li>Εκσυγχρονισμός και αναβάθμιση της αρχιτεκτονικής ενσύρματων δικτύων (LAN)</li>
                        <li>Ασύρματα δίκτυο δεδομένων (WLAN)</li>
                        <li>Συστήματα ενοποιημένης IP επικοινωνίας</li>
                      </ul>
                    </div>
					
              </div>
			   </div>
            </Card>
        </section>

		   <section>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">National Digital Readiness Baseline</h2>
              <div className="grid grid-cols-1 ">
                <img 
                  src="/images/readiness.png" 
                  alt="readiness" 
                  className="w-full rounded shadow-lg"
                />
             
              </div>
            </Card>
        </section>

        {/* Contact Info */}
        <section>
            <Card className="p-6 bg-gray-50">
              <div className="text-center space-y-2">
                <p className="font-semibold">ΝΙΚΟΣ ΒΑΓΓΑΛΗΣ</p>
                <p>Προϊστάμενος</p>
                <p>Τμήματος Παραγωγικής Λειτουργίας</p>
				<p>-</p>
                <p>Γενική Διεύθυνση Ηλεκτρονικής Υγείας</p>
                <p>Διεύθυνση Συστημάτων Β΄θμιας Φροντίδας Υγείας</p>
				<p>-</p>
                <p className="mt-4 text-blue-600">vagalis@idika.gr</p>
              </div>
            </Card>
        </section>
      </div>
    </div>
	
  );
};

export default CancerCarePresentation;
