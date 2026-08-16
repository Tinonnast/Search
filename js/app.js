

async function search() {
  let query = "fish"
  // let request = await fetch(`http://127.0.0.1:8000/search/${query}`)
  // let response = await request.json()
  // console.log(response)
  let response = [
    {
      "body": "A fish is an aquatic, anamniotic, gill-bearing vertebrate animal with a tough cranium to protect the brain, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and the more common jawed fish, the latter including all living cartilaginous and bony fish, as well as the extinct placoderms and acanthodians. In a break from the long tradition of grouping all fish into a single class (Pisces), modern phylogenetics views fish as a paraphyletic group that includes all vertebrates except tetrapods. In English, the plural of \"fish\" is fish when referring to individuals and fishes when referring to species.Most fish are cold-blooded, their body temperature varying with the surrounding water, though some large, active swimmers like the white shark and tuna can maintain a higher core temperature. Many fish can communicate acoustically with each other, such as during courtship displays. The study of fish is known as ichthyology.There are over 33,000 extant species of fish, easily the largest group of vertebrates and more than all species of the other traditional classes, namely amphibians, reptiles, birds, and mammals, combined. Most fish belong to the class Actinopterygii, the ray-finned fishes, which accounts for approximately half of all living vertebrates.The earliest fish appeared during the Cambrian as small filter feeders; they continued to evolve through the Paleozoic, diversifying into many forms. The earliest fish with dedicated respiratory gills and paired fins, the ostracoderms, had heavy bony plates that served as protective exoskeletons against invertebrate predators. The first fish with jaws, the placoderms, appeared in the Silurian and greatly diversified during the Devonian, the \"Age of Fishes\".Bony fish, distinguished by the presence of swim bladders and later ossified endoskeletons, emerged as the dominant group of fish after the end-Devonian extinction wiped out the apex predators, the placoderms. Bony fish are further divided into lobe-finned and ray-finned fishes. About 96% of all living fish species today are teleosts- a crown group of ray-finned fish that can protrude their jaws. The tetrapods, a mostly terrestrial clade of vertebrates that have dominated the top trophic levels in both aquatic and terrestrial ecosystems since the Late Paleozoic, evolved from lobe-finned fish during the Carboniferous, developing air-breathing lungs homologous to swim bladders. Fish have been an important natural resource for humans since prehistoric times, especially as food. Commercial and subsistence fishers harvest fish in wild fisheries or farm them in ponds or breeding cages in the ocean. Fish are caught for recreation or raised by fishkeepers as ornaments for private and public exhibition in aquaria and garden ponds. Fish have had a role in human culture through the ages, serving as deities, religious symbols, and as the subjects of art, books and movies.",
      "href": "https://en.wikipedia.org/wiki/Fish",
      "title": "Fish"
    },
    {
      "body": "Fish are gill-bearing, primarily aquatic vertebrates possessing fins for locomotion and a backbone, forming a paraphyletic grade that excludes tetrapod descendants despite their evolutionary origin from within the group. They typically feature scale…",
      "href": "https://grokipedia.com/page/Fish",
      "title": "Fish"
    },
    {
      "body": "Apr 11, 2026 · This guide explores 120 types of fish, offering a clear look at their distinctive features, behaviors, habitats, and ecological roles. Whether you’re a beginner fish enthusiast or an experienced naturalist, these descriptions help you identify and appreciate the variety in the underwater world.",
      "href": "https://enjoythewild.com/types-of-fish/",
      "title": "120 Types of Fish (Pictures and Identification)"
    },
    {
      "body": "May 12, 2026 · Fish are water animals that live in freshwater or saltwater and breathe through gills. Some fish are small and colorful, while others are large and used for food, fishing, or aquarium keeping. Salmon, tuna, goldfish, trout, shark, and catfish are some common examples of different types of fish.",
      "href": "https://www.vocabineer.com/types-of-fish/",
      "title": "100+ Different Types of Fish Names A–Z with their Pictures"
    },
    {
      "body": "Jul 30, 2026 · fish, any of approximately 34,000 species of vertebrate animals (phylum Chordata) found in the fresh and salt waters of the world. Living species range from the primitive jawless lampreys and hagfishes through the cartilaginous sharks, skates, and rays to the abundant and diverse bony fishes.",
      "href": "https://www.britannica.com/animal/fish",
      "title": "Fish | Definition, Species, Classification, & Facts | Britannica"
    }
  ]

  for (let data of response) {
    const href = data['href']
    const easyUrl = data['href'].slice(8).replace(/\/$/, "").replaceAll("/", " > ")
    const title = data['title']
    const body = data['body']
    const name = 'Google'
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${href}&sz=40`;

    const results = document.getElementById('results');
    const content = document.createElement('div');
    content.innerHTML = `<div class="result-site-info">` +
      `<img class="result-icon" src=${faviconUrl}>` +
      `<p class="result-page-name">${name}</p>` +
      `<p class="result-url">${easyUrl}</p>` +
      `</div>` +
      `<!--p>wikipedia.org > Fish</p-->` +
      `<a class="result-title" href=${href}>${title}</a>` +
      '<!-- href="https://wikipedia.org/">wikipedia.org > Fish</-->' +
      `<p class="result-description">${body}</p>`
    content.className = 'result'
    results.appendChild(content);
  }
}

search()

async function grokipedia() {
  let wikiImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Balantiocheilos_melanopterus_-_Karlsruhe_Zoo_02_%28cropped%29.jpg/330px-Balantiocheilos_melanopterus_-_Karlsruhe_Zoo_02_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail'
  let data = {
    "title": "Artificial intelligence",
    "intro": "Artificial intelligence (AI) is a subfield of computer science focused on developing systems that perform tasks requiring human intelligence, such as perception, reasoning, learning, and decision-making. The term was coined by John McCarthy in a 1955 proposal for the Dartmouth Conference held in 1956, which convened researchers to explore machine simulation of intelligence for solving human problems. AI research has experienced cycles of optimism and setbacks. Recent breakthroughs in machine learning —particularly deep neural networks —have produced milestones like IBM 's Deep Blue defeating chess champion Garry Kasparov in 1997, DeepMind 's AlphaGo mastering Go in 2016, and generative models creating coherent text, images, and code. Today's predominantly narrow AI excels at specialized tasks, such as medical diagnosis from imaging and autonomous vehicle navigation, while efforts toward artificial general intelligence (AGI) proceed amid debates over feasibility, timelines, and societal implications.",
    "infobox": {
      "Acronym": [
        "AI"
      ],
      "Parent Discipline": [
        "computer science"
      ],
      "Coined By": [
        "John McCarthy"
      ],
      "Coined Year": [
        "1955"
      ],
      "Founding Event": [
        "Dartmouth Conference"
      ],
      "Founding Year": [
        "1956"
      ],
      "Key Pioneers": [
        "Alan Turing",
        "John McCarthy",
        "Marvin Minsky",
        "Allen Newell",
        "Herbert Simon"
      ],
      "Subfields": [
        "machine learning",
        "natural language processing",
        "computer vision",
        "robotics",
        "expert systems",
        "deep neural networks"
      ],
      "Major Approaches": [
        "rule-based systems",
        "expert systems",
        "machine learning",
        "deep neural networks"
      ],
      "Current Paradigm": [
        "machine learning, particularly deep neural networks"
      ],
      "First Program": [
        "Logic Theorist"
      ],
      "First Program Year": [
        "1956"
      ],
      "Turing Test Year": [
        "1950"
      ],
      "Notable Milestones": [
        "Dartmouth Conference (1956)",
        "Deep Blue defeating Garry Kasparov (1997)",
        "AlphaGo mastering Go (2016)",
        "large-scale generative models producing coherent text, images, and code"
      ],
      "Ai Winters": [
        "cycles of optimism followed by setbacks—periods known as AI winters"
      ],
      "Deep Learning Breakthrough": [
        "2012, AlexNet winning the ImageNet competition"
      ],
      "Transformer Year": [
        "2017"
      ],
      "Related Disciplines": [
        "computer science",
        "mathematics",
        "philosophy",
        "psychology",
        "linguistics",
        "neuroscience"
      ],
      "Applications": [
        "medical diagnosis from imaging",
        "autonomous vehicle navigation",
        "generating coherent text, images, and code"
      ],
      "Status": [
        "Predominantly narrow AI excelling at specialized tasks, with ongoing efforts toward artificial general intelligence (AGI)"
      ]
    }
  }

  let intro = data['intro'].match(/^(?:.*?[.!?]){2}/)?.[0] || data['intro'];
  let middle = document.getElementById('middle')
  let wikiElement = document.createElement('div')
  wikiElement.id = 'wiki'
  wikiElement.innerHTML = `<h2 id="wiki-title">${data['title']}</h2>` +
    `<img id="wiki-image" src=${wikiImage}>` +
    `<p id="wiki-text">${intro}</p>`
  middle.appendChild(wikiElement)
  let infotable = document.createElement('table')

  for (const [key, list] of Object.entries(data.infobox)) {
    for (let i = 0; i < list.length; i++) {
      let row = document.createElement('tr')

      if (i === 0) {
        let keyCell = document.createElement('th')
        keyCell.innerText = key
        keyCell.rowSpan = list.length
        row.appendChild(keyCell)
      }

      let valueCell = document.createElement('td')
      valueCell.innerText = list[i]
      row.appendChild(valueCell)

      infotable.appendChild(row)
    }
  }

  middle.appendChild(infotable)
}

grokipedia()
