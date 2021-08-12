let data = {
    events: [
    { // 1
      date: moment({ month: 2, day: 20 }),
      city: 'Dayton',
      state: 'OH',
      venue: 'Omega Music',
      image: 'http://www.dking-gallery.com/pix/Scrojo2/Devotchka_0612.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(40);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 2
      date: moment({ month: 2, day: 29 }),
      city: 'Columbus',
      state: 'OH',
      venue: 'Newport Music Hall',
      image: 'http://alarm-magazine.com/wp-content/uploads/2010/11/wecht3.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(32);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 3
      date: moment({ month: 3, day: 3 }),
      city: 'Cincinatti',
      state: 'OH',
      venue: 'Bogart\'s',
      image: 'http://www.concertposterart.com/images/posters/detail/Devotchka-Paramount-Theater-Boulder-Silkscreen-Concert-poster.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(50);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 4
      date: moment({ month: 3, day: 15 }),
      city: 'Pittsburgh',
      state: 'PA',
      venue: 'Brillobox',
      image: 'http://www.dking-gallery.com/pix/Scrojo2/Devotchka_1109.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(45);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 5
      date: moment({ month: 4, day: 9 }),
      city: 'Philadelphia',
      state: 'PA',
      venue: 'Trocadero Theatre',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/b7/c2/20/b7c2209d9e20859608b9a15c1c3c88e9.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(43);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 6
      date: moment({ month: 4, day: 17 }),
      city: 'New York',
      state: 'NY',
      venue: 'Cake Shop',
      image: 'https://cdn.shopify.com/s/files/1/0008/4602/products/13_43_09_copy_large.jpg?v=1245964517',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(51);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 7
      date: moment({ month: 6, day: 1 }),
      city: 'Albany',
      state: 'NY',
      venue: 'The Hollow Bar',
      image: 'http://payload415.cargocollective.com/1/16/513343/10604531/DeVotchka-Final-Version_1000.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(46);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 8
      date: moment({ month: 6, day: 12 }),
      city: 'Buffalo',
      state: 'NY',
      venue: 'Larkin Square',
      image: 'http://furturtle.com/images/posters/mward_devotchka.jpg',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(48);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} },
  
    { // 9
      date: moment({ month: 7, day: 2 }),
      city: 'Detroit',
      state: 'MI',
      venue: 'Magic Stick',
      image: 'http://static1.squarespace.com/static/55dc9cf4e4b0ad76d727d9f7/55fadef6e4b09485049bbc7e/55fb2dd0e4b047fe82f8eac3/1442524624195/F941_Devotchka_Web.jpg?format=500w',
      imageOrientation: 'tall',
      imageDescription: 'DevotchKa Image',
      eventDescription() {return textFill(55);},
      dateTime() {return this.date.format();},
      datePretty() {return getDatePretty(this.date);} }] };
  
  
  
  
  
  let template = `{{#list events}}
    <article class="flex-grid-item event-card">
    <header class="event-card__header">
      <h1 class="event-card__date">
        <time datetime="{{dateTime}}">{{{datePretty}}}</time>
      </h1>
      <h2 class="event-card__city text-xl">{{city}}, {{state}}</h2>
      <h3 class="event-card__venue  text-xl">{{venue}}</h3>
    </header>
    <figure class="event-card__poster">
      <img class="{{imageOrientation}}" src="{{image}}" alt="{{imageDescription}}">
    </figure>
    <p class="event-card__desc copy-default">
      {{eventDescription}}
    </p>
    <footer class="event-card__footer">
      <ul class="event-card__links">
        <li><a class="text-s link-default event-card__link" href="#">Tickets</a></li>
        <li><a class="text-s link-default event-card__link" href="#">Map</a></li>
        <li><a class="text-s link-default event-card__link" href="#">More Info</a></li>
      </ul>
    </footer>
  </article>
  {{/list}}`;
  
  const ipsum = `Letterpress cardigan neutra, ramps bicycle rights ethical affogato. Distillery messenger bag bitters, typewriter polaroid health goth pork belly echo park cred offal. Art party shabby chic 90's synth authentic wolf. Wolf iPhone PBR&B tote bag, whatever heirloom knausgaard cred letterpress narwhal tattooed semiotics XOXO. Swag chillwave bespoke, lomo +1 selvage green juice. Wolf artisan trust fund, paleo twee keytar health goth pour-over PBR&B raw denim. Etsy intelligentsia kogi art party vegan gentrify.
  
  Green juice raw denim twee truffaut, meditation affogato pitchfork 3 wolf moon slow-carb listicle. Affogato hammock farm-to-table letterpress twee. Selfies lumbersexual small batch umami mustache flexitarian. Waistcoat before they sold out occupy, blue bottle small batch sustainable brunch knausgaard green juice flannel bitters helvetica. Photo booth DIY brooklyn raw denim, intelligentsia blog keffiyeh lomo YOLO put a bird on it humblebrag. Pour-over biodiesel green juice hashtag fap tousled. Authentic street art sriracha, small batch poutine taxidermy readymade narwhal gluten-free drinking vinegar salvia pickled portland blue bottle franzen.
  
  Literally chambray meh street art paleo franzen scenester, kitsch seitan direct trade ennui shoreditch. Listicle flannel lomo, roof party flexitarian salvia polaroid aesthetic. Pinterest VHS gluten-free, four loko kitsch mumblecore taxidermy venmo retro cronut plaid occupy direct trade cold-pressed tousled. Craft beer yuccie next level four loko you probably haven't heard of them, gastropub everyday carry bicycle rights neutra post-ironic leggings photo booth four dollar toast lomo letterpress. Kinfolk pork belly meditation pop-up. Intelligentsia master cleanse venmo tousled, offal shoreditch twee shabby chic neutra sustainable microdosing. Lumbersexual knausgaard readymade, jean shorts shabby chic tattooed truffaut irony waistcoat sriracha thundercats.`;
  
  function getDatePretty(momentObj) {
    let date = momentObj.format('MMM D');
    let dateAppend = `<span class="text-super">${momentObj.format('Do').substr(-2)}</span>`;
    return date + dateAppend;
  }
  
  function textFill(wordCount) {
    return ipsum.split(' ').slice(0, wordCount).join(' ');
  }
  
  Handlebars.registerHelper('list', function (events, opts) {
    let output = '';
    events.forEach(function (event) {
      output += opts.fn(event);
    });
    return output;
  });
  
  let compiled = Handlebars.compile(template);
  let rendered = compiled(data);
  let section = document.querySelector('.event-listing');
  
  section.innerHTML = rendered;