const speakers = [
  {
    img: 'assets/images/speakers/image-1.png',
    name: 'Mark Zuckerberg',
    position: 'Co-founder and CEO',
    company: 'Facebook',
    website: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
    bio: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder.',
  },
  {
    img: 'assets/images/speakers/image-2.png',
    name: 'Sundar Pichai',
    position: 'CEO',
    company: 'Alphabet Inc. (Google)',
    website: 'https://en.wikipedia.org/wiki/Sundar_Pichai',
    bio: `Pichai Sundararajan is an Indian-American business executive.He is the
                            chief executive officer (CEO) of Alphabet Inc.`,
  },
  {
    img: 'assets/images/speakers/image-3.png',
    name: 'Mitchell Baker',
    position: 'CEO',
    company: 'Mozilla',
    website: 'https://en.wikipedia.org/wiki/Mitchell_Baker',
    bio: 'Winifred Mitchell Baker is the Executive Chairwoman and CEO of the Mozilla Foundation and of Mozilla Corporation, a subsidiary of the Mozilla Foundation.',
  },
  {
    img: 'assets/images/speakers/image-4.png',
    name: 'Satya Nadella',
    position: 'CEO',
    company: 'Mozilla',
    website: 'https://en.wikipedia.org/wiki/Satya_Nadella',
    bio: 'Satyanarayana Nadella  is an Indian-born American business executive. He is the executive chairman and CEO of Microsoft.',
  },
  {
    img: 'assets/images/speakers/image-5.png',
    name: 'Jack Dorsey',
    position: 'CEO',
    company: 'Twitter',
    website: 'https://en.wikipedia.org/wiki/Jack_Dorsey',
    bio: 'Jack Patrick Dorsey is an American billionaire technology entrepreneur and philanthropist who is the co-founder and CEO of Twitter, and the founder and CEO of Square, a financial payments company.',
  },
  {
    img: 'assets/images/speakers/image-6.png',
    name: 'Sergey Brin',
    position: 'Co-Found Google and Alphabet Inc.',
    company: 'Mozilla',
    website: 'https://en.wikipedia.org/wiki/Sergey_Brin',
    bio: 'Sergey Mikhaylovich Brin is an American business magnate, computer scientist and Internet entrepreneur. Together with Larry Page, he co-founded Google and Alphabet Inc.',
  },
];

function getSpeakers(speaker) {
  const speakerData = ` <div class="speaker-content">
    <div class="speaker-image">
        <img src="${speaker.img}" alt="${speaker.name}" class="speaker-image"/>
    </div>
    <div class="speaker-details">
          <h3> ${speaker.name}</h3>
          <p class="speaker-title"><i>${speaker.position} - ${speaker.company}</i></p>
          <p class="speaker-description"><i><a href="${speaker.website}" class="speaker-website" target="_blank">${speaker.bio}</a></i></p>
    </div>
    </div>`;
  return speakerData;
}

const speakerSection = document.querySelector('.speakers-main');

function featuredSpeakers() {
  let speakersBuild = '';
  speakers.forEach((speaker) => {
    speakersBuild += getSpeakers(speaker);
  });
  speakerSection.innerHTML = speakersBuild;
}

speakerSection.onresize = featuredSpeakers();