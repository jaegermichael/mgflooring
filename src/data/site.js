// Central source of truth for MG Flooring content.
// All facts below are preserved from the existing site (mgflooring.co.zw).
// Images flagged with `placeholder: true` need a real photograph from the client.

export const company = {
  name: 'MG Flooring',
  legalName: 'MG Flooring (Pvt) Ltd',
  tagline: 'Flooring specialists',
  founded: '2015',
  location: 'Harare, Zimbabwe',
  description:
    'MG Flooring (Pvt) Ltd is a major contract floor layer and supplier of a variety of flooring products for domestic, commercial and industrial use. A registered company and member of the Construction Industry, operating since 2015 with operations in Harare.',
}

export const contact = {
  address: ['MG Flooring (Pvt) Ltd', '15271, 8th Close, Graniteside', 'Sunningdale, Harare, Zimbabwe'],
  phones: [
    { label: 'Call / WhatsApp', value: '+263 77 409 8640', href: 'tel:+263774098640' },
    { label: 'Call', value: '+263 712 175 629', href: 'tel:+263712175629' },
  ],
  emails: [
    { label: 'mgflooring17@gmail.com', href: 'mailto:mgflooring17@gmail.com' },
  ],
  whatsapp: 'https://wa.me/263774098640',
  hours: 'Mon to Sat · 7:00 to 17:00',
  banker: 'ZB Bank · 411200171206405 · First Street, Harare Branch',
  website: 'www.mgflooring.co.zw',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Payments', to: '/payments' },
  { label: 'Contact', to: '/contact' },
]

export const trustSignals = [
  { value: '2015', label: 'Operating since' },
  { value: '30+', label: 'Leading brands trusted' },
  { value: 'Nationwide', label: 'Coverage across Zimbabwe' },
  { value: 'Domestic · Commercial · Industrial', label: 'Project scale' },
]

export const services = [
  {
    slug: 'hardwood-parquet',
    name: 'Hardwood Parquet Floors',
    short: 'Timeless geometric timber, laid to pattern.',
    description:
      'Hardwood parquet floors are a classic choice known for their durability and beauty. Made from small pieces of wood arranged in a geometric pattern, most commonly herringbone and basket weave, parquet can be crafted from oak, walnut, maple or cherry and finished in a wide range of colours to match any interior.',
    image: '/img/parquet-teak.jpg',
    imageAlt: 'Warm teak hardwood parquet flooring laid in a pattern',
    gallery: ['/img/parquet-teak.jpg', '/img/wood-blocks-herringbone.jpg'],
  },
  {
    slug: 'strip-flooring',
    name: 'Strip Flooring',
    short: 'Long, thin hardwood boards with a classic look.',
    description:
      'Strip flooring is made from long, thin boards, usually 2 to 3 inches wide. Prized for its classic look and versatility, it can be installed straight, diagonal or in herringbone, is easy to care for, and is available in oak, maple, walnut and cherry.',
    image: '/img/strip-flooring-brown.jpg',
    imageAlt: 'Strip hardwood flooring in a warm brown tone',
    gallery: ['/img/strip-flooring-brown.jpg', '/img/strip-flooring-brown-white.jpg'],
  },
  {
    slug: 'wood-blocks',
    name: 'Wood Blocks',
    short: 'End-grain and parquet blocks for unique character.',
    description:
      'Wood blocks are a beautiful, distinctive flooring option. End-grain blocks are sliced from the tree trunk into small uniform blocks; face-grain blocks are cut lengthwise from planks; and parquet blocks join small pieces into patterns. Each has its own look, benefits and installation method.',
    image: '/img/wood-blocks.jpg',
    imageAlt: 'Teak wood blocks arranged as flooring',
    gallery: ['/img/wood-blocks.jpg', '/img/wood-blocks-herringbone.jpg'],
  },
  {
    slug: 'wood-laminations',
    name: 'Wood Laminations',
    short: 'Bonded timber layers for strength and stability.',
    description:
      'Wood lamination bonds two or more pieces of timber with glue, pressure and heat to create a stronger, more stable product that is less likely to warp or crack. Used widely for beams, furniture and flooring, it can also create decorative veneers and inlay designs.',
    image: '/img/laminate-1.jpg',
    imageAlt: 'Wood laminate flooring planks in a range of shades',
    gallery: ['/img/laminate-1.jpg', '/img/laminate-2.jpg', '/img/laminate-3.jpg'],
  },
  {
    slug: 'ceramic-tile',
    name: 'Ceramic / Porcelain / Quarry Tile',
    short: 'Hard-wearing clay tile for floors and walls.',
    description:
      'Ceramic, porcelain and quarry tiles are all made from natural clays, kiln-fired into a hard, durable surface. Ceramic tiles are less dense and more porous; porcelain is denser with lower water absorption; quarry tiles are denser still with a rougher texture. Each suits different applications and traffic levels.',
    image: null,
    imageAlt: 'Ceramic and porcelain tile flooring',
    placeholder: true,
  },
  {
    slug: 'carpeting',
    name: 'Carpeting',
    short: 'Residential and commercial carpet, supplied and laid.',
    description:
      'Carpeting is available in nylon, polyester, olefin and wool, each with its own benefits. Nylon is durable, stain-resistant and easy to clean; polyester resists stains and comes in many colours; olefin resists moisture and fading; wool is soft and durable at a higher price point. We supply and install residential and commercial carpet tiles.',
    image: '/img/carpeting.jpg',
    imageAlt: 'Rolled carpeting in a showroom',
    video: '/video/carpeting.mp4',
    gallery: ['/img/carpeting.jpg'],
  },

  {
    slug: 'vinyl-sheeting',
    name: 'Vinyl Sheeting',
    short: 'Hygienic, seamless vinyl for medical and commercial use.',
    description:
      'Durable, seamless vinyl sheeting for hospitals, clinics and commercial environments where hygiene and easy maintenance are essential. Supplied and laid to a clean, professional finish.',
    image: '/img/vinyl-sheeting-1.jpg',
    imageAlt: 'Vinyl sheeting installed for a hospital environment',
    gallery: ['/img/vinyl-sheeting-1.jpg', '/img/vinyl-sheeting-2.jpg', '/img/vinyl-sheeting-3.jpg'],
  },
  {
    slug: 'epoxy-floors',
    name: 'Epoxy Floors',
    short: 'Seamless, hard-wearing resin floors.',
    description:
      'Seamless epoxy flooring systems for industrial, commercial and residential spaces, valued for their durability, hygiene and low maintenance.',
    image: null,
    imageAlt: 'Seamless epoxy floor finish',
    placeholder: true,
  },
  {
    slug: 'decks',
    name: 'Decks, Teak & Composite',
    short: 'Outdoor teak and composite decking.',
    description:
      'Outdoor decking in teak and composite, designed and installed for patios, verandas and outdoor entertaining areas.',
    image: null,
    imageAlt: 'Teak outdoor decking',
    placeholder: true,
  },
  {
    slug: 'vinyl-plank',
    name: 'Vinyl Plank',
    short: 'Realistic timber-look planks that stand up to wear.',
    description:
      'Vinyl plank flooring delivers the look of timber with the durability and easy care of vinyl, a practical choice for busy homes and commercial spaces.',
    image: null,
    imageAlt: 'Vinyl plank flooring in a timber finish',
    placeholder: true,
  },
  {
    slug: 'floor-restoration',
    name: 'Floor Restoration & Sanding',
    short: 'Renew an old wooden floor to look brand new.',
    description:
      'We refurbish old wooden floors by sanding with a floor sanding machine, then apply two coats of sealer (varnish). The sealer protects and beautifies your floor, bringing worn timber back to life.',
    image: '/img/floor-restore-final.jpg',
    imageAlt: 'A restored wooden floor after sanding and sealing',
    gallery: ['/img/floor-restore-before.jpg', '/img/floor-restore-after.jpg', '/img/floor-restore-final.jpg'],
  },
]

export const projects = [
  {
    name: 'Ceramic driveway and carpet installation',
    sector: 'Residential / Commercial',
    scope: 'Laying ceramic driveway and carpets',
    image: '/img/pavement-1.jpg',
    imageAlt: 'Ceramic driveway paving',
  },
  {
    name: 'Heritage parquet flooring',
    sector: 'Private Club',
    scope: 'Timber and parquet flooring',
    image: '/img/wood-blocks-herringbone.jpg',
    imageAlt: 'Herringbone wood block flooring',
    placeholderImage: true,
  },
  {
    name: 'Industrial flooring installation',
    sector: 'Industrial',
    scope: 'Commercial and industrial flooring',
    image: '/img/vinyl-sheeting-1.jpg',
    imageAlt: 'Commercial flooring installed for an industrial client',
    placeholderImage: true,
  },
  {
    name: 'Engineering workspace flooring',
    sector: 'Engineering',
    scope: 'Flooring supply and installation',
    image: '/img/work-in-progress-1.jpg',
    imageAlt: 'Flooring installation in progress',
    placeholderImage: true,
  },
  {
    name: 'Education facility flooring',
    sector: 'Education',
    scope: 'Flooring supply and installation',
    image: '/img/laminate-1.jpg',
    imageAlt: 'Wood laminate flooring',
    placeholderImage: true,
  },
  {
    name: 'Residential hardwood flooring',
    sector: 'Residential',
    scope: 'Hardwood flooring',
    image: '/img/strip-flooring-brown-white.jpg',
    imageAlt: 'Hardwood strip flooring in a residence',
    placeholderImage: true,
  },
  {
    name: 'Institutional hardwood flooring',
    sector: 'Religious / Institutional',
    scope: 'Flooring supply and installation',
    image: '/img/strip-flooring-brown.jpg',
    imageAlt: 'Brown hardwood flooring',
    placeholderImage: true,
  },
]

export const reasons = [
  {
    index: '01',
    title: 'Competitive pricing',
    body:
      'Our teak floors, decks (teak and composite), vinyl plank, commercial carpet tiles and epoxy floors are competitively priced. From large commercial developments to your private home, we offer reasonable prices to suit your budget, without compromising quality.',
  },
  {
    index: '02',
    title: 'Quality guaranteed',
    body:
      'What we advertise is the final product you receive. MG Flooring guarantees every product in our catalogue is delivered as advertised, backed by our professionalism and years of experience producing high-quality finishes.',
  },
  {
    index: '03',
    title: 'Nationwide reach',
    body:
      'For over a decade we have served every part of the country. No landmark is too far to reach, send us your pin and we will be there.',
  },
]

export const blogPosts = [
  {
    slug: 'ceramic-tile-care-instructions',
    title: 'Ceramic Tile Care Instructions',
    date: 'December 11, 2014',
    category: 'Maintenance',
    excerpt:
      'A practical guide to cleaning, sealing and caring for glazed and unglazed tile, so your floors stay looking their best for years.',
    body: [
      {
        heading: 'Routine care',
        paragraphs: [
          'Glazed tile products should be cleaned routinely with an all-purpose, low-VOC household or commercial cleaner. The product you choose should also be compatible with grout-joint cleaning, and the type may vary depending on the tile application and use.',
          'A multipurpose spray cleaner that removes soap scum, hard-water deposits and mildew can be used on wall-tile areas in residential baths and showers. Apply and agitate with a cotton mop, cloth, sponge or non-metallic brush, then rinse with clean water and dry thoroughly. Routine cleaners should never contain harsh chemicals, acids can damage grout and the glazed surface, and ammonia can discolour grout.',
          'Dust-mop, sweep or vacuum before cleaning with liquid products. Unglazed tile should be cleaned with concentrated tile cleaners at a neutral pH, which better remove grease, oils and normal spills.',
        ],
      },
      {
        heading: 'Removing sealers, waxes and floor finishes',
        paragraphs: [
          'Glazed ceramic tile should not be sealed, only the grout should be sealed. To remove a topical sealer or floor wax, use a tile sealer and adhesive remover, always testing a small area first. Apply a liberal amount undiluted, let it set without drying until the coating softens, agitate with a white nylon scrub pad if needed, then wipe up the residue and rinse thoroughly with clean water. Do not use ceramic sealer removers on natural stone.',
        ],
      },
      {
        heading: 'Grout care',
        paragraphs: [
          'Grout fills the joints between tiles and becomes a permanent part of the installation. It darkens over time, so we recommend sealing it regularly to preserve and protect it, and it can be stained to normalise the colour of older grout.',
          'After installation, cover the new floor with brown paper to protect it from debris while construction continues, and dampen the grout joints daily for the first seven days to help the grout cure and lock its colour. Never use plastic or non-absorbent materials, which trap moisture and discolour grout.',
          'Most installations use cementitious grout, which should be sealed after installation (72 hours later) with a penetrating/impregnating sealer that does not contain silicone. Epoxy grouts are chemically cured and acid-resistant, so they do not require sealing.',
        ],
      },
      {
        heading: 'Grout maintenance & restoration',
        paragraphs: [
          'Sealing does not guarantee against surface buildup, grout still needs periodic cleaning. For heavy-duty cleaning, use a professional-strength tile and grout cleaner that removes grease, soap scum, body oil, mildew stains and algae while remaining low-VOC.',
          'When grout can no longer be cleaned back to its natural colour, you can restore it with an epoxy-based grout stain that penetrates and seals with a permanent colour. Clean the joint thoroughly before staining, and no further sealing is needed afterwards.',
        ],
      },
    ],
  },
  {
    slug: 'tips-for-the-cleaning-and-maintenance-of-wood-flooring',
    title: 'Tips for the Cleaning and Maintenance of Wood Flooring',
    date: 'December 11, 2014',
    category: 'Maintenance',
    excerpt:
      'Wood floors bring a warm, earthy feel to any home. Here is how to clean and maintain them so they stay beautiful and last longer.',
    body: [
      {
        heading: 'Keeping your wood floor looking new',
        paragraphs: [
          'Wood floors bring an earthy, warm feel to the house and are gaining popularity for their beauty, durability and green nature. If you install wooden flooring, you should also understand how to clean and maintain it, proper care keeps the floor looking new and increases its longevity.',
          'For laminate wood flooring, a vacuum cleaner or a flipper mop is very efficient at removing dust. If food or liquid is spilled and forms a stubborn stain, use a dampened cloth to remove it, then wipe with a dry cloth to remove all moisture from the surface.',
        ],
      },
      {
        heading: 'Things to remember',
        paragraphs: [
          'Maintain the right temperature and humidity to ensure a long, healthy life for your wood floors.',
          'Avoid using oil, wax or any other furniture spray, and save your wood flooring from steam cleaning, steam is meant for tile, linoleum and vinyl, and can leave a wood floor looking dull.',
          'Never use ammonia, alkaline products or other abrasive cleaners, which can dull the finish and cause scratches.',
          'Place soft doormats and rugs to keep dirt and debris at bay, and fit felt pads to the legs of furniture and chairs to avoid scratches. Periodically check the pads for wear and replace them when needed.',
          'Avoid rolling chairs with casters on the finished surface, place them on rugs or Plexiglas chair mats, and use wide rubber or polyurethane casters.',
          'Do not drag furniture or heavy objects across the floor; lift them when they need to move. Protect wood surfaces from direct sunlight with blinds or curtains, as prolonged bright light can change the colour of the wood.',
        ],
      },
    ],
  },

  {
    slug: 'heres-exactly-how-to-maintain-wood-floors',
    title: "Here's Exactly How To Maintain Wood Floors",
    date: 'November 11, 2014',
    category: 'Maintenance',
    excerpt:
      'Every season brings new challenges for hardwood floors. Here is the routine, guided by the National Wood Flooring Association.',
    body: [
      {
        heading: 'Clean spills immediately',
        paragraphs: [
          'Every season brings new problems for hardwood floors, winter brings snow, ice and salt, spring brings rain and dirt, summer adds chlorine and salt water, and autumn brings dirt and leaves. Despite all the upkeep, wood floors are simply too stunning to skip.',
          'Use a dry or slightly damp cloth to wipe up spills immediately, avoiding wet or steam mops, which cause more damage over time. Because wood swells and shrinks with moisture, keep humidity down to avoid cupping, splitting and gapping. Clean spills as soon as they occur, keep your home between 60 and 80 degrees Fahrenheit (and 30 to 50 percent humidity), and keep wet shoes out of the house.',
        ],
      },
      {
        heading: 'Use furniture pads',
        paragraphs: [
          'Scratches are among the toughest problems to solve on wood floors. While some are inevitable, many are preventable, one of the best ways is to add furniture pads to the legs of your chairs, sofas and tables.',
        ],
      },
    ],
  },
]





