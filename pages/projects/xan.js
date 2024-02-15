import styled from 'styled-components';
import { useState, Fragment } from 'react';
import Image from 'next/image';

const CharacterSheet = styled.section`
  font-family: 'Fira Sans', sans-serif;
  font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (2100 - 300)));
  background: #474453;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  padding: 0.5rem;
  color: white;
  width: 100%;
  max-width: 100vw;

  p {
    font-size: 1rem;
    line-height: 1.4;
  }

  h2 {
    font-size: 6rem;
    margin: 0;
  }

  header {
    position: sticky;
    top: 0;
    padding: 0.2rem 0.2rem 0.3rem;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    box-shadow: 0px 3px 11px 0px #16075666;
    z-index: 1000;
  }
`;

const CharacterName = styled.article`
  display: flex;
  margin-bottom: 1rem;

  strong {
    font-family: 'loos-extended', sans-serif;
    font-size: 0.88rem;
    text-transform: uppercase;
  }
  em {
    text-transform: none;
    font-family: 'Fira Sans', sans-serif;
  }
  figure {
    margin: 1em;
    position: relative;
    max-height: 8rem;
    max-width: 8rem;

    img {
      border-radius: 100%;
      max-height: 8rem;
      object-fit: cover;
    }

    figcaption {
      position: absolute;
      width: 30px;
      height: 30px;
      bottom: 3px;
      left: 0;
      text-align: center;
      border-radius: 30px;
      background: #3f2f83;

      a {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: #bdb0fc;

        svg {
          margin: 9px;
        }
      }
    }
  }
`;

const FlavorText = styled.article`
  flex: 3;
`;

const TypeTag = styled.span`
  background: #3f2f83;
  color: #bdb0fc;
  background: #3f2f83;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  margin-right: 5px;
  font-size: 0.9rem;
  text-transform: uppercase;
  line-height: 2.5;
`;

const SpellBook = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  margin: 1rem auto;
`;

const SpellArticle = styled.section`
  background: #0f0c29;
  background: linear-gradient(to bottom, #0f0c29, #231f4c);
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 1s ease-in-out;

  h3 {
    font-size: 1.6rem;
    margin: 0;
    color: #6250b2;
  }

  strong {
    font-family: 'loos-wide', sans-serif;
    text-transform: uppercase;
    font-size: 0.88rem;
    letter-spacing: 0.05rem;
    color: #6250b2;
  }

  a {
    font-size: 1rem;
    color: #bdb0fc;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    width: max-content;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #bdb0fc;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(1);
      transition: transform 0.2s ease-in-out;
    }

    svg {
      width: 100%;
      height: 100%;
      max-width: 0.75rem;
      max-height: 0.75rem;
      margin-left: 0.3rem;
      display: inline;
    }

    &:focus,
    &:hover {
      color: #fff;

      &:after {
        transform: scaleX(0);
      }
    }
  }
`;

const FilterButton = styled.button`
  color: white;
  background: #6250b2;
  border: none;
  border-radius: 30px;
  margin: 0.5rem 0.2rem;
  padding: 0.2rem 0.8rem;

  &:hover {
    background: #fff;
    color: #6250b2;
  }
`;

const Stats = styled.div`
  width: 100%;
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); */
  display: flex;
  & > * {
    margin-right: 1.5rem;
  }

  strong {
    font-family: 'loos-wide', sans-serif;
    text-transform: uppercase;
    font-size: 0.88rem;
    letter-spacing: 0.05rem;
    color: #6250b2;
  }
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 0.5rem;
  padding: 2rem;
  background: linear-gradient(to right, #0f0c29, #18153b, #21213d);
  color: #bdb0fc;

  strong {
    font-family: 'loos-wide', sans-serif;
    text-transform: uppercase;
    font-size: 0.88rem;
    letter-spacing: 0.05rem;
    color: #6250b2;
  }
`;

const spells = [
  {
    name: 'Note of Potential',
    range: 'hearing',
    castTime: 'bonus action',
    duration: '1 minute',
    type: ['Feat', 'Buff'],
    filterType: 'buff',
    ref: 'http://dnd5e.wikidot.com/bard:creation',
    description: [
      'When you join the College of Creation at 3rd level, whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature.',
      'The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.',
      '👋 Ability Check: When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment.',
      '👊 Attack Roll: Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die.',
      '🙏 Saving Throw: Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point).',
    ],
  },
  {
    name: 'Bardic Inspiration',
    type: ['Feat', 'Buff'],
    filterType: 'buff',
    range: '60 feet',
    goods: '1d6',
    castTime: 'bonus action',
    duration: '1 minute',
    ref: 'https://www.dndbeyond.com/classes/bard#BardicInspiration-75',
    description: [
      'You can inspire others through stirring words or music. The creature gains one Bardic Inspiration die, a d6.',
      'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.',
      'The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails.',
      'Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.',
    ],
  },
  {
    name: 'Animating Performance',
    castTime: '1 action, command with bonus action',
    type: ['Feat', 'damage', 'Minion'],
    filterType: 'minion',
    goods: 'HP: 10+(5x Bard Level), Hit: 1d10+PB',
    ref: 'http://dnd5e.wikidot.com/bard:creation',
    description: [
      'By 6th level, as an action, you can target a Large or smaller nonmagical item you can see within 30 feet of you and animate it.',
      'The animate item uses the Dancing Item stat block, which uses your proficiency bonus (PB), The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.',
      'In combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the item can take any action of its choice, not just Dodge.',
      'When you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.',
      "Once you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again.",
      'You can have only one item animated by this feature at a time; if you use this action and already have a dancing item from this feature, the first one immediately becomes inanimate.',
    ],
  },
  {
    name: 'Song of Rest',
    type: ['Feat', 'Buff'],
    filterType: 'buff',
    range: 'hearing',
    goods: '1d6 HP',
    duration: '8 hours',
    ref: 'http://dnd5e.wikidot.com/bard:rest',
    description: [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. 😴',
      'If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, 💗 each of those creatures regains an extra 1d6 hit points.',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.',
    ],
  },
  {
    name: 'Prestidigitation',
    castTime: '1 action',
    range: '10',
    duration: 'up to 1 hour',
    type: ['utility', 'illusion'],
    filterType: 'illusion',
    ability: 'Cantrip',
    ref: 'http://dnd5e.wikidot.com/spell:prestidigitation',
    description: [
      'You create one of the following magical effects within range: 10 feet',
      '• You create an Instantaneous, harmless sensory Effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.',
      '• You instantaneously light or snuff out a Candle, a torch, or a small campfire.',
      '• You instantaneously clean or soil an object no larger than 1 cubic foot.',
      '• You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.',
      '• You make a color, a small mark, or a Symbol appear on an object or a surface for 1 hour.',
      '• You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.',
      '✨ If you cast this spell multiple times, you can have up to three of its non-instantaneous Effects active at a time, and you can dismiss such an Effect as an Action.',
    ],
  },
  {
    name: 'Vicious Mockery',
    castTime: '1 action',
    range: '60 feet',
    type: ['DOT', 'damage'],
    filterType: 'DOT',
    savingThrow: 'Wisdom',
    goods: '1d4 psychic & disadvantage',
    ref: 'https://roll20.net/compendium/dnd5e/Vicious%20Mockery#content',
    description: [
      'Target: A creature you can see and that can hear you within range.',
      'You unleash a string of insults laced with subtle enchantment 🤬 at a creature you can see within range.',
      '🙉 If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.',
      "This spell's damage increases by 1d4 when you reach ☝️ 5th Level (2d4), 11th level (3d4), and 17th level (4d4).",
    ],
  },
  {
    name: 'Message',
    castTime: '1 action',
    range: '120 feet',
    type: ['Utility'],
    filterType: 'utility',
    duration: '1 round',
    ref: 'https://roll20.net/compendium/dnd5e/Message#content',
    description: [
      '☝️ You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.',
      '🧱 You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier.',
      '🪵 Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell.',
      '〰 The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.',
    ],
  },
  {
    name: 'Silent Image',
    castTime: '1 action',
    range: '60 feet',
    duration: 'up to 10 minutes',
    type: ['utility', 'illusion'],
    filterType: 'illusion',
    ultility: 'illusion',
    savingThrow: 'Intellegence',
    ref: 'https://roll20.net/compendium/dnd5e/Silent%20Image#content',
    description: [
      'You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration.',
      ' 👁 The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects.',
      'You can use your action to cause the image to move to any spot within range. ⬇ As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.',
      '❌ Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.',
    ],
  },
  {
    name: 'Dissonant Whispers',
    castTime: '1 action',
    range: '60 feet',
    type: ['DOT', 'control'],
    filterType: 'control',
    Duration: 'Instantaneous',
    savingThrow: 'Wisdom',
    goods: '3d6 psychic damage',
    ref: 'https://roll20.net/compendium/dnd5e/Dissonant%20Whispers#content',
    description: [
      '🎶 You unleash a horrible discordant note that only one creature of your choice that you can see within range can hear. The target must succeed on a Wisdom saving throw or take 3d6 psychic damage and become frightened of you for the duration.',
      '🤯 While frightened by you, the target must take the Dash action 🏃‍♂️ and move away from you by the safest available route on each of its turns, unless there is nowhere to move.',
      '👀 If the target ends its turn in a location where it doesn’t have line of sight to you, the target can make a Wisdom saving throw. On a success, the spell ends.',
    ],
  },
  {
    name: 'Tasha’s Hideous Laughter',
    castTime: '1 action',
    range: '30 feet',
    type: ['DOT', 'Control'],
    filterType: 'DOT',
    savingThrow: 'Wisdom',
    ref: 'https://roll20.net/compendium/dnd5e/Tasha%27s%20Hideous%20Laughter#content',
    description: [
      'A creature of your choice ☝️ that you can see 👀 within range must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration.',
      'A creature incapacitated by this spell can’t regain consciousness until the spell ends, at which point the creature automatically stands up.',
      '☠️ The spell has no effect on undead or constructs.',
    ],
  },
  {
    name: 'Faerie Fire',
    castTime: '1 action',
    range: '60 feet',
    type: ['Illusion', 'Control'],
    filterType: 'illusion',
    duration: 'up to 1 minute',
    savingThrow: 'Dexterity',
    ref: 'https://roll20.net/compendium/dnd5e/Faerie%20Fire#content',
    description: [
      'Each object in a 20-foot cube within range is outlined in blue, green, or violet light 🎨 (your choice).',
      'Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw.',
      '💡 For the duration, objects and affected creatures shed dim light in a 10-foot radius.',
    ],
  },
  {
    name: 'Aid',
    castTime: '1 action',
    range: '30 feet',
    duration: '8 hours',
    type: ['Buff'],
    filterType: 'buff',
    ref: 'https://roll20.net/compendium/dnd5e/Aid#content',
    description: [
      'Your spell bolsters your allies with toughness and resolve.',
      ' 💕💖 Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration.',
    ],
  },
  {
    name: 'Healing Word',
    range: 'within sight',
    castTime: '1 bonus action',
    goods: '1d4 + SC Mod',
    type: ['Healing'],
    filterType: 'healing',
    description: [
      'A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.',
    ],
  },
  {
    name: 'Phantasmal Force',
    castTime: '1 action',
    range: '60 feet',
    type: ['Illusion'],
    filterType: 'illusion',
    duration: '1 minute',
    savingThrow: 'Intellegence',
    ref: 'https://roll20.net/compendium/dnd5e/Phantasmal%20Force#content',
    description: [
      'You craft an illusion that takes root in the mind of a creature that you can see 👀 within range.',
      'The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration.',
      '☠️ This spell has no effect on undead or constructs. The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.',
      'The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.',
      'While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge.',
      'If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall; it was pushed, it slipped, or a strong wind might have knocked it off. An affected target is so convinced of the phantasm’s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target.',
      'Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.',
    ],
  },
  {
    name: 'Bestow Curse',
    castTime: '1 action',
    range: '30 feet',
    duration: '1 minute',
    savingThrow: 'Wisdom - each turn',
    goods: '1d8 necrotic damage',
    type: ['DOT', 'damage'],
    filterType: 'DOT',
    ref: 'https://roll20.net/compendium/dnd5e/Bestow%20Curse#content',
    description: [
      '👉🏻 You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell.',
      'When you cast this spell, choose the nature of the curse from the following options: Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. ❌ While cursed, the target has disadvantage on attack rolls against you.',
      'While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.',
      'While the target is cursed, your attacks and spells deal an extra 🕷 1d8 necrotic damage to the target. A remove curse spell ends this effect.',
      'At the GM’s option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The GM has final say on such a curse’s effect.',
      'At Higher Levels: If you cast this spell using a spell slot of 4th level or higher, the Duration is Concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the Duration is 8 hours. ',
      'If you use a spell slot of 7th level or higher, the Duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a Duration that doesn`t require Concentration.',
    ],
  },
  {
    name: 'Enemies Abound',
    castTime: '1 action',
    range: 'within sight',
    duration: 'Concentration, 1 minute',
    savingThrow: 'Intelligence',
    type: ['DOT', 'Control'],
    filterType: 'control',
    ref: 'https://roll20.net/compendium/dnd5e/Enemies%20Abound#content',
    description: [
      'You reach into the mind of one creature you can see and force it to make an 🤯 Intelligence saving throw.',
      'A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends.',
      'Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.',
      'Whenever the affected creature chooses another creature as a target, it must choose the target at 🎲 random from among the creatures it can see within range of the attack, spell, or other ability it’s using. ',
      'If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to.',
    ],
  },
  {
    name: `Lenora's Tiny Hut`,
    castTime: '1 action',
    range: 'Self',
    duration: '8 hours',
    type: ['Utility'],
    filterType: 'utility',
    ref: 'https://roll20.net/compendium/dnd5e/Lenora%27s%20Tiny%20Hut#content',
    description: [
      'A 10-foot-radius immobile dome ⛺️ of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.',
      'Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely.',
      'All other creatures and objects are barred from passing through it. Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.',
      'Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.',
    ],
  },
  {
    name: 'Hypnotic Pattern',
    castTime: '1 action',
    range: '120 feet, 30-ft cube within range',
    duration: '1 minute',
    savingThrow: 'Wisdom',
    type: ['Illusion', 'Control'],
    filterType: 'Illusion',
    description: [
      'You create a 🌀 twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes.',
      'Each creature in the area who sees 🙈 the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration.',
      'While charmed by this spell, the creature is incapacitated and has a speed of 0. 😵‍💫 The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.',
    ],
  },
  {
    name: 'Rapier',
    goods: '1d8 + ATK Bonus ',
    range: 'Melee',
    type: ['Weapon', 'damage'],
    filterType: 'damage',
    description: ['1d8 piercing'],
    ref: 'https://roll20.net/compendium/dnd5e/Rapier#content',
  },
  {
    name: 'Short Bow',
    goods: '1d6 + ATK Bonus ',
    type: ['Weapon', 'damage'],
    filterType: 'damage',
    range: '80/320',
    description: ['1d8 piercing'],
    ref: 'https://roll20.net/compendium/dnd5e/Shortbow#content',
  },
];

const spellFilter = [
  { name: '📖 All', slug: 'all' },
  { name: '⏱ DOT', slug: 'DOT' },
  { name: '🌀 Control', slug: 'control' },
  { name: '✨ Illusion', slug: 'illusion' },
  { name: '✊ Buffs', slug: 'buff' },
  { name: '💊 Heals', slug: 'healing' },
  { name: '🛠 Utility', slug: 'utility' },
  { name: '🤖 Minion', slug: 'minion' },
  { name: '⚔️ Damage', slug: 'damage' },
];

const Xan = () => {
  const [spellType, setSpellType] = useState('all');

  return (
    <CharacterSheet>
      <CharacterName>
        <figure>
          <Image
            src="https://res.cloudinary.com/labofthingsimages/image/upload/v1698341833/dndcharacterxan_tre2o8.png"
            alt="picture of my character"
            width="140"
            height="140"
          />
          <figcaption>
            <a
              href="https://canarydraws.tumblr.com/post/662507906680373248/a-pair-of-commissions-i-got-for-a-lovely-bard"
              target="_blank"
              rel="noreferrer"
            >
              {/* <Launch fill="#bdb0fc" /> */}
            </a>
          </figcaption>
        </figure>
        <FlavorText>
          <h2>Xan</h2>
          <p>
            <strong>Xanathea Georgiana Parbaresco II</strong>
          </p>
          <p>
            <em>Half Elf Bard from the famous Parbaresco family.</em>
          </p>
          <br />
        </FlavorText>
        {/* <div>
          <p>
            <em>
              Who cares? I'm better than my family. One day I'll be the most
              powerful bard and everyone will love me.
            </em>
          </p>
        </div> */}
      </CharacterName>
      <section>
        <header>
          <Stats>
            <p>
              <strong>AC</strong> 15
            </p>
            <p>
              <strong>Sp</strong> 30
            </p>
            <p>
              <strong>HP</strong> 37
            </p>
            <p>
              <strong>Spell Save</strong> 15
            </p>
            <p>
              <strong>Spell ATK</strong> 7
            </p>
            <p>
              <strong>ATK Bonus</strong> 6
            </p>
          </Stats>

          {spellFilter.map(({ name, slug }) => {
            return (
              <FilterButton key={name} onClick={() => setSpellType(slug)}>
                {name}
              </FilterButton>
            );
          })}
        </header>
        <SpellBook>
          {spells.map(
            (
              {
                name,
                range,
                castTime,
                description,
                duration,
                type,
                filterType,
                ref,
                goods,
                savingThrow,
              },
              i
            ) => {
              return (
                <Fragment key={name}>
                  {filterType === spellType || spellType === 'all' ? (
                    <SpellArticle>
                      <h3>{name}</h3>
                      <p>
                        <strong>Range</strong> {range}
                      </p>
                      <p>
                        {castTime && (
                          <>
                            <strong>Cast Time</strong> {castTime}
                          </>
                        )}
                      </p>
                      {savingThrow && (
                        <p>
                          <strong>Saving Throw</strong> {savingThrow}
                        </p>
                      )}
                      <p>
                        {goods && (
                          <>
                            <strong>goods</strong> {goods}
                          </>
                        )}
                      </p>{' '}
                      <p>
                        {duration ? (
                          <>
                            <strong>Duration</strong> {duration}
                          </>
                        ) : null}
                      </p>
                      <p>
                        {type
                          ? type.map(({ item }, i) => (
                              <TypeTag key={i}>{type[i]}</TypeTag>
                            ))
                          : null}
                      </p>
                      <br />
                      <p>
                        {description
                          ? description.map(({ item }, i) => (
                              <span key={i}>
                                {description[i]}
                                <br />
                                <br />
                              </span>
                            ))
                          : null}
                      </p>
                      <a href={ref} alt={name} target="_blank" rel="noreferrer">
                        Spell Reference
                        {/* <Launch fill="#bdb0fc" /> */}
                      </a>
                    </SpellArticle>
                  ) : null}
                </Fragment>
              );
            }
          )}
        </SpellBook>
      </section>
      <footer>
        <Skills>
          <p>
            <strong>Acrobatics</strong> +5*
          </p>
          <p>
            <strong>Animal Handling</strong> -1
          </p>
          <p>
            <strong>Arcana</strong> -1
          </p>
          <p>
            <strong>Athletics</strong> +7* E
          </p>
          <p>
            <strong>Deception</strong> +4
          </p>
          <p>
            <strong>History</strong> +2
          </p>
          <p>
            <strong>Insight</strong> +1
          </p>
          <p>
            <strong>Intimidation</strong> +4
          </p>
          <p>
            <strong>Investigation</strong> -1
          </p>
          <p>
            <strong>Medicine</strong> +1
          </p>
          <p>
            <strong>Nature</strong> -1
          </p>
          <p>
            <strong>Nature</strong> -1
          </p>
          <p>
            <strong>Perception</strong> +7*
          </p>
          <p>
            <strong>Performance</strong> +7*
          </p>
          <p>
            <strong>Persuasion</strong> +10* E
          </p>
          <p>
            <strong>Religion</strong> -1
          </p>
          <p>
            <strong>Sleight of Hand</strong> +5
          </p>
          <p>
            <strong>Stealth</strong> +2
          </p>
          <p>
            <strong>Survival</strong> +1
          </p>
        </Skills>
      </footer>
    </CharacterSheet>
  );
};

export default Xan;
