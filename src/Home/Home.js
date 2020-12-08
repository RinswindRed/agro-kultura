import React, { Component } from "react";
import svg from "../assets/serbia.svg";
import { data } from "../data/data";
import img from "../assets/nis.jpg";

import {
  Grid,
  Dropdown,
  Modal,
  Image,
  Button,
  Header,
  Tab,
} from "semantic-ui-react";

const panes = [
  {
    menuItem: "Vazne informacije o regionalnom centru",
    pane: {
      key: "tab1",
      content: (
        <div>
          Niš je najveći grad u jugoistočnoj Srbiji i sedište Nišavskog upravnog
          okruga. Na području grada Niša je, prema popisu iz 2011, živelo
          260.237 stanovnika, dok je u samom naseljenom mestu živelo 183.164
          stanovnika, pa je tako po broju stanovnika Niš treći grad po veličini
          u Srbiji (posle Beograda i Novog Sada). Nalazi se 237 km jugoistočno
          od Beograda na reci Nišavi, nedaleko od njenog ušća u Južnu Moravu.
          Grad Niš zauzima površinu od oko 596,73 km², uključujući Nišku Banju i
          68 prigradskih naselja. Važan je privredni, univerzitetski, kulturni,
          verski i politički centar Srbije. Niški univerzitet, osnovan 1965.
          godine, ima 14 fakulteta i oko 30.000 studenata, a grad je i sedište
          Niške eparhije Srpske pravoslavne crkve. Grad Niš je od 2004.
          administrativno podeljen na pet gradskih opština: Medijana, Palilula,
          Pantelej, Crveni Krst i Niška Banja.
          <p>
            <b>Vazni telefoni:</b>
          </p>
          Gradska uprava: 0054453453 Sluzba za katastart: 0054453453
        </div>
      ),
    },
  },
  {
    menuItem: "Tresnja",
    pane: {
      key: "tab2",
      content: (
        <div>
          Trešnja se gaji za potrošnju u svežem stanju, manji broj gaji se samo
          radi prerađevina (kompoti, džemo­vi, marmelade, sirovina za
          konditorsku industriju), a najmanje se gaje isključivo za proizvodnju
          likera ili rakija. Jednom ubrane trešnje više ne sazrevaju, pa se
          moraju brati zrele. Sveže su trešnje sjajne, pune i sa žarko zelenim
          peteljkama. Jako su praktične jer im osim pranja ne treba gotovo
          nikakva priprema i najbolje su sveže.  Početak pune rodnosti im je od
          6 do 8 godine. Razlikujemo trešnje s mekanim mesom ploda i trešnje s
          čvrstim mesom ploda (hrskave).  Agroekološki uslovi za gajenje trešnje
          Temperatura Trešnja je izrazit heliofit (traži mnogo sunca i toplote).
          Cvetanje počinje kad prosečne dnevne temperature dostignu 10 - 11 °C,
          a najbolje se oplođuje pri prosečnoj dnevnoj temperaturi između 15 i
          20 °C. Trešnja dobro podnosi vrlo niske temperature u doba dubokog
          mi­rovanja. Stablo može izdržati do -30 °C, a rodni pupoljci do -25
          °C. Ako je stablo ušlo u zimu sa slabijom kondicijom (suša u protekloj
          vegetaciji, prevlažna godina bez tople jeseni, preobilan rod,
          iscrpljenost od napada biljnih štetočina i si.), onda izmrzavanje može
          nastupiti i na -24 °C. U jesen, u novembru, kada nema zimskog
          mirovanja, uz temperaturu -15 °C do -17 °C stradaju debla i račvaste
          grane. Trešnje žute ili svetlocrvene boje ploda otpornije su od sorata
          tamno­crvene i crvene boje ploda, jer im je kora svih vegeta­tivnih
          organa svetlija. Pri kretanju vegetacije cvetni pupoljci izdrže od
          -2,8 °C (žute sorte), otvoreni cvetovi izdrže od -2 do -3 °C (žute
          sorte) odnosno samo -1 °C (tamne sorte), zametnuti plodići izdrže -1,2
          °C (žute sorte), a na toj temperaturi plodići tamnih sor­ti
          najverovatnije će izmrznuti. Voda Dovoljna joj je mala količina vlage
          u zemljištu jer njen koren ima veliku adsorpcionu moć. Trešnji je
          dovoljno oko 500 mm padavina godišnje, naročito ako su dobro
          raspoređene. Ne podnosi visoku relativnu vlagu vazduha, a pogoduje joj
          suv vazduh. Povećana relativna vlažnost vazduha podstiče na trešnji
          znatnu pojavu bilj­nih bolesti, a povećane padavine ometaju
          diferencijaciju (zametanje) cvetnih pupoljaka, i izazivaju slabu
          oplodnju, opadanje plodića i pucanje plodova. Zemljište Trešnji
          najbolje odgovaraju duboka i rastresita, blago kisele, neutralne ili
          blago alkalne reakcije (pH 5,0 – 7,0), aluvijalna zemljišta, peskovite
          ilovače, posmeđene crvenice, propusni krečnjak i si. Izbor položaja za
          podizanje zasada Trešnja traži umerena vazdušna strujanja. Ne podnosi
          jake vetrove, posebno u doba cvetanja, zato što kod jačih vetrova
          pčele ne lete, pa je time umanjena mogućnost oplodnje. Suvi i topli
          vetrovi remete vreme početka i dinamiku cvetanja (ubrzavaju cvetanje),
          pa time ometaju kvalitet oplodnje (kraće se podudaraju vremena
          cvetanja međusobnih oprašivača). Vetrovi mogu biti i korisni, naročito
          u kraćim ili dužim kišnim raz­dobljima, kad svojim strujanjem umanjuju
          štetne posledice velike relativne vlage vazduha ili suvišne vlažnosti
          zemljišta. Trešnja se uspešno gaji između 30° i 60° severne širine, na
          nadmorskoj visini do 1 000 m. Za sigurniji gajenje trešnje bolje su
          severne od južnih ekspozicija ako su dovoljno visoke ali i blagi
          brežulj­ci s blagim padinama. Priprema zemljišta za sadnju Dve godine
          pre sadnje trešnje trebalo bi zasejati višegodišnje leguminoze kao
          pretkulturu jer one imaju sposobonost vezivanja atmosferskog azota i
          obogaćivanje zemljišta istim. Nakon đubrenja pristupa se rigolovanju
          na dubini od 60 – 100 cm, u zavisnosti od rastresitosti i dubine
          zemljišta. Rigololuje se dva meseca pre sadnje. Nakon toga zemljište
          se istanjira i razmere se mesta za sadnju trešanja. Izbor podloga Od
          nekoliko mogućih podloga za trešnju: generativnih - sejanac divlje
          trešnje (Prunus avium) i sejanac magrive (Prunus mahaleb) ili
          vegetativnih - Gisela, F12/1 i Colt. Izbor uzgojnog oblika Za
          podizanje zasada trešnje s preporučenim uzgojnim oblikom etažne
          piramide, visine oko 4,5 m, potrebni su razmaci sadnje 6,3 x 5 m.
          Međutim, ta prinosna etažna piramida kod trešnje ima pravilan oblik
          samo u prvim godinama rasta, a posle se deformiše i poprimi oblik
          okrenute piramide jer je druga etaža u povoljnijem fi­ziološkom
          položaju od prve etaže, kao što je treća etaža u povoljnijem položaju
          od druge etaže i u još povoljnijem položaju od prve. Stoga se
          preporučuje oblikovanje pravilne etažne piramide trešnje. Vreme i
          tehnika sadnje Bolje je voćke saditi u jesen kada je zemljište još
          toplo i vlažno, pa odmah počinje rast korena. Tokom prevoza i
          skladištenja, sadnice ni u jednom trenutku ne smeju izgubiti vodu. Pre
          sadnje odstrane se svi oštećeni delovi korena i on se umoči u mešavinu
          zemlje, vode i svežeg goveđeg stajnjaka. Za kućne vrtove napogodnije
          su sorte niskog stabla. Voćke velike krošnje i odgovarajuće visine
          zahtevaju razmak od najmanje 10 m. Neke sorte zahtevaju oprašivače, pa
          je uvek potrebno posaditi najmanje dva stabla. Trešnja počinje
          donositi plodove nakon 6 do 8 godina, a stablo može doživeti 50-ak i
          više godina.  Iskopa se rupa širine dovoljne da sadnica s korenom
          stane u nju. Na koren se stavlja sloj rastresite zemlje debljine 5 - 8
          cm koji se dobro nagazi kao i 20 - 30 kg zrelog stajnjaka. Na stajnjak
          se opet stavlja zemlja a oko voćke se oblikuje čanak za bolje
          zadržavanje vode. Sadi se na dubinu  identičnu onoj u rasadniku.
          Održavanje zasada U proleće i pre početka vegetacije dodaje se
          mineralno đubrivo KAN 27%. Tretiranje zakorovljenog zaštitnog pojasa
          obavlja se 2 - 3 puta u ve­getaciji s 4 - 6 l/ha. Rezidba rodnih
          stabala obavlja se u periodu mirovanja voćki i u doba vegetacije.
          Međuredni prostor zatravljuje se tek nakon 2-3 godine nakon podizanja
          zasada. Košenjem (malčiranjem) trave povećava se sadržaj or­ganske
          materije, poboljšavaju fizička, hemijska i biološka svojstva
          zemljišta.
        </div>
      ),
    },
  },
  {
    menuItem: "Visnja",
    pane: {
      key: "tab3",
      content: (
        <div>
          Višnja ima manju krošnju od trešnje i uglavnom raste kao žbunoliko
          stablo. Puno se proizvodi sorta oblačinska višnja pogodna za
          industrijsku preradu.  Najbolje uspeva na obroncima i blagim padinama
          okrenutim jugu, jugoistoku i istoku. Plod višnje je svetlocrvene ili
          tamnocrvene boje, slatkog ili kiselkastog ukusa. Spada u rano voće,
          koje se manje jede u svežem stanju, a više se industrijski prerađuje
          (sokovi, džemovi, rakija, vino, prelivi za konditorske proizvode,
          kompot itd.). Agroekološki uslovi za gajenje višnje Temperatura U
          vreme dubokog zimskog mirovanja višnja može podneti i -35 °C. U fazi
          početka vegetacije ona je posebno osetljiva na niske tem­perature. U
          toj fenofazi, uz niske noćne temperature dolazi do izmrzavanja debla
          (zbog naglog jutarnjeg zagrevanja kore) u obliku pucanja kore.
          Najosetljivija je 3 - 4 nedelje pre cvetanja i u cvetanju. U toj
          fenofazi nastaju znatne štete ako temperature padnu na -2,2 °C do -2,7
          °C. Za razliku od drugih voćnih vrsta, višnja je otpor­nija prema
          visokim temperaturama, pa nema šteta kad temperature prelaze i 30 °C.
          Voda Donja granica za gajenje višnje je 650 mm padavina godišnje. Tamo
          gde nema dovoljno padavina pristupa se navodnjavanju. Zemljište Višnji
          najviše odgovaraju pro­pusna, topla i duboka zemljišta (peskovite
          ilovače kao i ilovasta i ilovasto glinasta zemljišta). Teža zemljišta
          višnja teže podnosi, pa je na takvim zemljištima obvezatna drenaža.
          Priprema zemljišta za sadnju Pre dubokog oranja (rigolovanja) potrebno
          je krčiti ostatke zaostalog šiblja ili drveća i zaravnati male ili
          veće depresije na parceli. Meliorativna đubrenje obuhvata dodavanje
          fosfora i kalijuma, delom pre rigolovanja, a delom pod tanjiraču.
          Budući da se koren višnje nalazi do 60 cm du­bine, rigolovanje
          zemljišta mora se obaviti najmanje do te dubine. Rigolovanje je
          najbolje obavljati onda kad je zemljište potpuno suvo, a to je
          uglavnom u julu i avgustu. Pre sadnje, i to jesenje, potrebno je
          poravnati i usitniti zemljište. To je vrlo važno jer je za uspešnu
          sadnju potrebna rastresita zemlja. Iskolče se redovi i sadna mesta na
          razmaku 5 x 4 m. Za sadnju dolaze u obzir samo prvorazredne
          jednogodišnje sadnice višnje sa snažno razvijenim nadzemnim delom (s
          prevremenim izdancima) kao i dobro raz­vijenim korenovim sistemom.
          Izbor sadnog materijala Pre sadnje, sadnice se pregledaju i odvoje se
          one koje su oštećene. Koren se osveži rezom. Tako pripremljene sadnice
          stoje nekoliko sati pre sadnje u smesi vode, ilovače i goveđeg
          stajnjaka. Ta gusta smesa uhvati se na korenje, omogućuje njegovo
          bubrenje, a ujedno je i početna hrana sadnici. Izbor podloga Višnja se
          na težim zemljištima gaji na generativnim podlogama, i to na sejanacu
          divlje trešnje, vrapčare (Prunus avium). Na lakšim peskovitim
          zemljištima, u kontinentalnoj RH i na suvim zemljištima u Dalmaciji,
          višnja se gaji na sejanacu magrive (Prunus mahaleb). Divlja trešnja
          kao podloga zastupljenija je od magrive. Ta podloga se mnogo lakše
          može prilagoditi lošijim uslovima zemljišta i klime. Izbor sorata
          Sorte višnje trebaju zadovoljiti i sledeće zahteve: da im plod ne puca
          u kišnim godinama, da im se plodovi lako odvajaju od peteljke, da gube
          malo soka pri mehaniziranoj berbi, kao i da su otporne prema bolestima
          i štetočinama. Izbor uzgojnog oblika Višnji najviše odgovara prostorni
          uzgojni oblik po­pravljene piramide s deblom od 80 cm. Taj se uzgojni
          oblik sastoji od srednje produžnice sa 7 - 9 primarnih grana, koje na
          srednjoj produžnici spi­ralno izrastaju u razmacima 20 - 40 cm jed­na
          od druge. Vreme i tehnika sadnje Sadnju je potrebno obaviti u jesen
          jer prolećna, a pogotovo kasna prolećna sadnja može biti vrlo loša u
          pogledu prijema i razvijanja primljenih sadnica. Sad­nica višnje rano
          počinje vegetaciju, a istovremeno se koren u zemljištu sporo
          oporavlja, pa u toj razdoblju nema dobre ravnoteže u snabdevanju vodom
          i hranivima iz zemljišta. Sadnice posađene u jesen ili rano proleće
          prekraćuju se tek pre početka vegetacije, i to na visinu 120 cm uz
          prekraćivanje svih bočnih izdanaka na 2 pupoljka, s tim da se bočni
          izdanci do 80 cm potpuno uklone. Na označenom mestu iskopa se toliko
          velika jama da se u nju lako može smestiti sadnica s korenjem, ali s
          korenovim vratom u nivou površine zemljišta. Zemljište posuto po
          korenu sadnice se dobro nagazi, doda se stajsko đubrivo i zatim
          prekrije rastresitom zemljom. Ako se stajsko đubrivo stavlja posle,
          tada se stavlja po ivičnom delu posađene sadnice u količini oko 30 kg.
          Održavanje zasada U proleće i pre početka vegetacije dodaje se
          mineralno đubrivo KAN 27%. Tretiranje zakorovljenog zaštitnog pojasa
          obavlja se 2 - 3 puta u ve­getaciji s 4 - 6 l/ha. Rezidba rodnih
          stabala obavlja se u periodu mirovanja voćki i u doba vegetacije.
          Međuredni prostor zatravljuje se tek nakon 2-3 godine nakon podizanja
          zasada. Košenjem (malčiranjem) trave i korova povećava se sadržaj
          or­ganske materije, poboljšavaju fizička, hemijska i biološka svojstva
          zemljišta.
        </div>
      ),
    },
  },

  // {
  //   menuItem: 'Tab 4',
  //   pane: (
  //     <Tab.Pane key='tab4'>
  //       <p>This tab has complex content</p>

  //       <List>
  //         <List.Item>Apples</List.Item>
  //         <List.Item>Pears</List.Item>
  //         <List.Item>Oranges</List.Item>
  //       </List>
  //     </Tab.Pane>
  //   ),
  // },
];

const jabucasto = [
  {
    key: 123,
    text: "Jabuka",
    value: "jabucasto",
    // image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  },
  {
    key: 212,
    text: "Kruska",
    value: "jabucasto",
    // image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
  },
  {
    key: 312,
    text: "Dunja",
    value: "jabucasto",
    // image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
];
const jagodasto = [
  {
    key: 113,
    text: "Jagoda",
    value: "jagodasto",
    // image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  },
  {
    key: 213,
    text: "Malina",
    value: "jagodasto",
    // image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
  },
  {
    key: 312,
    text: "Kupina",
    value: "jagodasto",
    // image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
];

const kosticavo = [
  {
    key: 12,
    text: "Breskva",
    value: "kosticavo",
    // image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  },
  {
    key: 21,
    text: "Kajsija",
    value: "kosticavo",
    // image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
  },
  {
    key: 22,
    text: "Sljiva",
    value: "kosticavo",
    // image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
  {
    key: 42,
    text: "Visnja",
    value: "kosticavo",
    // image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
  {
    key: 44,
    text: "Tresnja",
    value: "kosticavo",
    // image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
];

class Home extends Component {
  state = {
    selected: "",
    open: false,
    fill: [],
    location: null
  };

  handleChange = (e, { value }) => {
    this.setState({ selected: value });
  };

  handleOnClick = (location) => {
    const { selected } = this.state;
    this.setState({
      open: location.isCenter.includes(selected),
      location
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleColor = (value, index) => {
    const isRed = data.map((loc) => {
      return loc.isCenter.includes(value) ? "red" : "";
    });
    return isRed[index];
  };

  render() {
    const { open, selected, location } = this.state;
    return (
      <>
        <Modal
          show={true}
          open={open}
          onClose={this.handleClose}
        >
          <Modal.Header>{location && location.title} Regionalni centar: {location && location.city}</Modal.Header>
          <Modal.Content image>
            <Grid.Column width={2}>
              <Image wrapped size="medium" src={img} />
            </Grid.Column>
            <Grid.Column width={14} style={{ marginLeft: "20px" }}>
              <Modal.Description>
                <Header>Kosticavo voce</Header>
                <Tab panes={panes} renderActiveOnly={false} />
              </Modal.Description>
            </Grid.Column>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.handleClose}>
              Zatvori
            </Button>
          </Modal.Actions>
        </Modal>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Dropdown
                onChange={this.handleChange}
                options={jabucasto}
                value={selected}
                text="Jabucasto voce"
                 // ovde da se promeni iconica
                icon="apple"
                floating
                labeled
                button
                className="icon"
                style={{ marginBottom: "250px" }}
              />

              <Dropdown
                onChange={this.handleChange}
                options={jagodasto}
                value={selected}
                text="Jagodasto voce"
                // ovde da se promeni iconica
                icon="apple" 
                floating
                labeled
                button
                className="icon"
              />
            </Grid.Column>
            <Grid.Column width={10} textAlign="center">
              <div>
                <svg
                  style={{
                    width: "545px",
                    height: "793px",
                    fill: "darkgreen",
                    stroke: "grey",
                  }}
                >
                  {data.map((location, i) => {
                    return (
                      <use
                        onClick={() => this.handleOnClick(location)}
                        onHover={this.showIcon}
                        xlinkHref={`${svg}#${location.id}`}
                        style={{
                          fill: this.handleColor(selected, i),
                          cursor: location.isCenter.includes(selected) ? "pointer" : "initial",
                        }}
                      />
                    );
                  })}
                </svg>
              </div>
            </Grid.Column>

            <Grid.Column width={3}>
              <Dropdown
                onChange={this.handleChange}
                options={kosticavo}
                value={selected}
                text="Kosticavo voce"
                 // ovde da se promeni iconica
                icon="apple"
                floating
                labeled
                button
                className="icon"
                style={{ marginBottom: "250px" }}
              />
              <Dropdown
                onChange={this.handleChange}
                options={jabucasto}
                value={selected}
                text="Jezgrasto voce"
                 // ovde da se promeni iconica
                icon="apple"
                floating
                labeled
                button
                className="icon"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Home;
