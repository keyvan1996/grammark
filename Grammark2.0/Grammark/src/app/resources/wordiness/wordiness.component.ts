import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wordiness',
  templateUrl: './wordiness.component.html',
  styleUrls: ['./wordiness.component.css']
})
export class WordinessComponent implements OnInit {

  title = 'wordiness';
   // the words with an empty string as the fix will make the format of table look weird. Ex line 555
  values = {
'absolutely essential':'essential',
'aforementioned':'DELETE',
'a bigger degree of':'more',
'a greater degree of':'more',
'a higher degree of':'more',
'a larger degree of':'more',
'a considerable amount of':'DELETE OR BE SPECIFIC',
'a decreased number of':'fewer',
'a distance of':'just state the distance',
'a lesser degree of':'less',
'a smaller degree of':'fewer',
'a lot of':'many, much',
'a majority of':'most, much of, many',
'a person who is':'a xxx person',
'a total of':'just state the number',
'added bonus':'bonus',
'advance notice':'notice',
'advance reservations':'reservations',
'advance warning':'warning',
'advance planning':'planning',
'after all is said and done':'DELETE',
'all across':'across',
'all of':'all',
'all of a sudden':'suddenly',
'all of these':'these',
'all-time record':'record',
'almost never':'seldom',
'along the lines of':'like',
'any and all':'all',
'are such that':'DELETE',
'is such that':'DELETE',
'are able to':'can, OR DELETE',
'was able to':'could, OR remove and change the verb after "to" into past tense',
'were able to':'could, OR remove and change the verb after "to" into past tense',
'armed gunman':'gunman',
'assemble together':'assemble',
'attach together':'attach',
'as a matter of fact':'in fact OR DELETE',
'as a means to':'to',
'as a result of':'because of',
'as a whole':'DELETE',
'as a way to':'to',
'as being a':'as OR DELETE',
'as it truly is':'DELETE',
'as of the moment':'DELETE',
'as the case may be':'DELETE',
'at a later date':'later',
'at the conclusion of':'after',
'at all times':'always OR DELETE',
'at first glance':'DELETE',
'at the present time':'currently, now',
'at the same time that':'while',
'at this point in time':'now OR DELETE',
'autobiography of his [or her] life':'autobiography',
'bald-headed':'bald',
'based in large part on':'based on',
'based on the fact that':'since/because',
'basic necessity':'necessity',
'basic fundamentals':'basics OR fundamentals',
'because of the fact of':'because of',
'being':'DELETE',
'being that':'because',
'best ever':'best',
'beyond a shadow of a doubt':'DELETE',
'blend together':'blend',
'both of these':'both',
'both of them':'both',
'both of the':'both',
'brings to mind':'recalls/suggests',
'brief moment':'moment',
'brief summary':'summary',
'but yet':'but OR yet',
'burning embers':'embers',
'by and large':'DELETE',
'by definition':'DELETE',
'by leaps and bounds':'DELETE',
'by means of':'by',
'by the same token':'DELETE OR similarly/likewise',
'by the use of':'using',
'came to a realization':'realized/recognized',
'came to an abrupt end':'end[ed] abruptly',
'careful scrutiny':'scrutiny',
'can be seen as':'is OR DELETE',
'classify into groups':'classify',
'clearly articulate':'articulate',
'close scrutiny':'scrutiny',
'close down':'close',
'close up':'close',
'collaborate together':'collaborate',
'combine together':'combine',
'come to the understanding':'understand',
'common similarities':'similarities',
'comparatively larger than':'larger than/smaller than',
'comparatatively smaller than':'smaller than',
'compare and contrast':'compare',
'compete with each other':'compete',
'complete stranger':'stranger',
'completely':'DELETE',
'concerning the matter of':'about/regarding',
'conduct an investigation into':'investigate',
'connected together':'connected',
'continue into the future':'continue OR DELETE',
'continue on':'continue',
'consensus of opinion':'consensus',
'consider to be':'DELETE',
'considered to be':'DELETE',
'core essence':'DELETE',
'correctional facility':'jail',
'crisis situation':'crisis',
'dates back to':'dates to',
'depreciate in value':'depreciate',
'great pleasure from':'enjoy, appreciate, etc.',
'despite the fact that':'although',
'did not succeed':'failed',
'disappear from sight':'disappear',
'doomed to perish':'doomed',
'due to the effects':'because',
'due to the fact that':'because',
'dull in appearance':'dull',
'during the course of':'during, while',
'each and every':'each, every',
'each individual':'DELETE OR everyone',
'each of':'each',
'early on in the':'early in the',
'each separate incident':'each incident',
'economically deprived':'poor',
'eliminate altogether':'eliminate',
'emergency situation':'emergency',
'enclosed herewith':'enclosed',
'end result':'result',
'engaged in':'DELETE',
'enter into':'enter OR DELETE',
'epic quest':'quest OR epic',
'equal to one another':'equal',
'equally as good':'equally good OR equal',
'erode away':'erode',
'every single one':'each one, all, each',
'exactly identical':'identical',
'exactly the same':'the same   For Jack, every well was exactly the same',
'fair amount':'DELETE [or be specific]',
'fall down':'fall',
'few and far between':'rare, unusual OR DELETE',
'few in number':'few',
'filled to capacity':'filled [full]',
'final outcome':'final OR DELETE',
'first priority':'priority',
'first and foremost':'first',
'fly through the air':'fly',
'foreign imports':'imports',
'for all intents and purposes':'DELETE',
'for that which is':'for the',
'for the manner in which':'the way',
'for the purpose of':'to, for',
'foreseeable future':'[when exactly?]',
'free gift':'gift',
'frozen ice':'ice',
'future plans':'plans OR prospects',
'gain entry into':'enter',
'general consensus':'consensus',
'general public':'public',
'give an indication of':'indicate',
'give consideration to':'consider',
'grave crisis':'crisis',
'grow in size':'grow',
'hand in hand':'together',
'has the ability to':'can',
'a tendency to':'often OR DELETE',
'been found to be':'is/was/are',
'the ability to':'can/could',
'the capacity for':'can/could',
'the effect of':'DELETE',
'the opportunity to':'can/could',
'an effect upon':'influenced',
'hear the sound of':'hear',
'heat up':'heat',
'I myself':'I',
'clear and concise':'[concisely] concise',
'a situation in which':'eperienced',
'in a very real sense':'DELETE',
'in a way that is clear':'clearly OR clear way',
'in actuality':'DELETE',
'in all probability':'probably/likely',
'in close proximity':'near',
'in light of the fact that':'because',
'in itself':'DELETE',
'in nature':'DELETE',
'in order to':'to',
'in reality':'DELETE',
'in reference to':'about/regarding',
'in the event that':'if',
'in the neighborhood of':'about',
'in the vicinity of':'near',
'in today\'s society':'today',
'in spite of':'despite',
'in spite of the fact that':'although',
'in such a way':'in a way',
'in terms of':'DELETE',
'in the area of':'in OR around',
'in the course of':'during, while',
'in the final analysis':'finally OR DELETE',
'in light of':'considering OR DELETE',
'in a majority of instances':'usually',
'in the midst of':'during, amid',
'the nature of':'DELETE',
'in the near future':'soon OR DELETE',
'in the not too distant future':'soon OR DELETE',
'in their own right':'DELETE',
'in this day and age':'currently, now, today',
'in view of the fact that':'because',
'in which':'DELETE',
'inadvertent error':'error',
'inner feelings':'feelings',
'interestingly enough':'DELETE',
'intertwined together':'intertwined',
'intertwine together':'intertwine',
'irregardless':'DELETE',
'is a reflection of':'reflects',
'is able to':'can OR DELETE',
'is an important factor in':'DELETE',
'is aware of the fact that':'knows',
'is described as being':'is OR is described as',
'is found to be':'is',
'is going to':'will',
'is helpful in understanding':'clarifies',
'is in conflict with':'conflicts with/is against',
'is in contrast to':'contrasts with',
'is of significant importance':'is significant OR is important',
'is scared of':'fears',
'is seen as':'is',
'is something that is':'is',
'is well aware that':'understands',
'is when':'is OR DELETE',
'is where':'DELETE',
'appears as though':'appears OR DELETE',
'seems as though':'seems',
'can be seen that':'DELETE',
'could happen that':'could/may/might',
'goes to show that':'DELETE',
'clear that':'DELETE',
'evident that':'DELETE',
'apparent that':'DELETE',
'it is crucial that':'must/should OR DELETE',
'it is important that':'must/should OR DELETE',
'interesting':'BE MORE SPECIFIC',
'necessary that':'must/should OR DELETE',
'it is possible that':'DELETE',
'it is rarely the case that':'[X] rarely happens',
'should be noted that':'DELETE OR note that',
'should be pointed out that':'note that',
'would seem that':'DELETE',
'would appear that':'DELETE',
'gather together':'join/gather',
'join together':'gather/join',
'joint collaboration':'collaboration',
'joyous celebration':'celebration',
'kind of':'DELETE',
'kneel down':'kneel',
'lag behind':'lag',
'last but not least':'finally',
'last but not the least':'finally',
'later on':'later',
'lift up':'lift',
'local residents':'residents',
'longer/shorter in length':'longer/shorter',
'look ahead to the future':'look ahead, plan OR DELETE',
'made out of':'made from, made of',
'mainly focuses on':'focuses on',
'major breakthrough':'breakthrough',
'make a decision':'decide',
'make a determination':'decide',
'make an assumption':'assume',
'make an effort':'try',
'made an effort':'try',
'make contact with':'contact',
'with reference to':'about',
'manner in which':'way',
'many different kinds of':'many',
'many different ways':'many ways',
'meet together':'meet',
'mental attitude':'attitude',
'merge together':'merge',
'mix together':'mix',
'more or less':'be specific',
'more preferable':'preferable',
'mutual agreement':'agreement',
'mutual respect for':'respect',
'nape of the neck':'nape',
'native habitat':'habitat',
'natural instinct':'instinct',
'necessary prerequisite':'prerequisite',
'never before':'never',
'new invention':'invention/innovation',
'new innovation':'innovation/invention',
'new record':'record',
'new recruit':'recruit',
'none at all':'none',
'nostalgia for the past':'nostalgia',
'not the least of them being':'AVOID',
'of great importance':'DELETE OR is important',
'off of':'off OR from',
'old custom':'custom/adage',
'on a daily basis':'daily',
'on account of the fact that':'because',
'on the basis of':'because, based on',
'the grounds that':'because',
'the occasion of':'on/preparing for',
'the situation of':'about',
'the subject of':'about OR DELETE',
'surface level':'surface',
'on the whole':'DELETE',
'on top of this':'moreover OR DELETE',
'on top of that':'moreover',
'one of the more':'DELETE',
'one of the most':'DELETE',
'only serves to':'DELETE',
'open up':'open',
'over again':'repeatedly',
'over exaggerate':'exaggerate',
'overall goal':'goal',
'overall structure':'structure',
'overexaggerate':'exaggerate',
'owing to the fact that':'because',
'particular type of':'DELETE',
'past experience':'experience',
'past history':'history',
'past memories':'memories',
'the amount of':'DELETE',
'penetrate into':'penetrate',
'period of time':'period, time, or DELETE',
'personal friend':'friend',
'personal opinion':'opinion',
'personally':'DELETE',
'pick and choose':'choose',
'plan ahead':'plan',
'plan in advance':'plan',
'play an important role':'DELETE [be specific]',
'plays an important role':'DELETE [be specific]',
'polar opposites':'opposites',
'possible course of action':'choice',
'possible courses of action':'choices',
'previous/prior to':'before',
'proceed ahead':'proceed',
'prior to':'before',
'protest against':'protest',
'providing that':'provided',
'put to use':'use',
'puzzling in nature':'puzzling',
'quite clearly':'DELETE',
'readily apparent':'apparent',
'real life':'TRUE',
'reconsider again':'reconsider',
'refer back':'refer',
'reply back':'reply',
'reflect back':'reflect',
'regardless of the fact that':'although',
'respective':'DELETE',
'respectively':'DELETE',
'right up to the':'to the',
'rise up':'rise',
'in shape':'DELETE',
'safe haven':'haven',
'exactly the same thing':'repeat',
'scrutinize carefully':'scrutinize',
'prefer to have':'prefer',
'serious danger':'danger',
'serve the purpose of':'DELETE',
'serves to show':'shows',
'serve to show':'show',
'set a new record':'set a record',
'shout loudly':'shout',
'in size':'DELETE',
'some kind of':'DELETE',
'sort of':'DELETE',
'spell out in detail':'spell out OR DELETE',
'state of affairs':'DELETE [vague]   Their accident was a terrible state',
'still has yet':'has yet',
'study in depth':'study',
'subsequent to':'after',
'subsequent to the use of':'after using',
'sudden impulse':'impulse',
'sum total':'total OR sum',
'summarize briefly':'summarize',
'surrounded on all sides':'surrounded',
'sworn affidavit':'affidavit',
'symbolically represents':'represents OR symbolizes',
'take action':'act',
'take into account':'consider',
'taken the time':'DELETE',
'in height':'DELETE',
'terrible tragedy':'tragedy',
'this being said':'DELETE',
'that being said':'DELETE',
'that exists':'DELETE',
'that exists between':'between/with/among',
'that exists among':'between/with/among',
'that exists with':'between/with/among',
'that is':'DELETE when possible',
'that are':'DELETE when possible',
'that were':'DELETE when possible',
'that is to say':'DELETE',
'the color':'just state the name of the color',
'complete opposite of':'the opposite of',
'final result':'result',
'human race':'humanity OR people',
'the fact that':'that OR DELETE',
'the fact remains':'DELETE',
'final conclusion':'conclusion',
'majority of':'most/many',
'means by which':'how',
'manner by which':'how',
'the month of':'DELETE',
'overall plan':'plan',
'possibility exists':'may/might/could',
'is to illustrate':'wordy',
'is to show':'wordy',
'is to determine':'wordy',
'is to demonstrate':'wordy',
'the reason is because':'the reason/because',
'the reason why':'the reason, why, because',
'type of':'DELETE',
'a tendency':'DELETE OR BE SPECIFIC',
'there is':'DELETE',
'there are':'DELETE',
'there was':'DELETE',
'there were':'DELETE',
'total destruction':'destruction',
'to a certain extent':'DELETE OR BE SPECIFIC',
'to be in a position to':'to',
'to make a plan':'to plan',
'to make a decision':'to decide',
'to make an acquisition':'to acquire',
'to make an arrangement':'to arrange',
'true fact':'fact',
'in the afternoon':'p.m.',
'in the morning':'a.m.',
'ultimate fate':'fate',
'ultimate objective OR goal':'objective OR goal',
'unexpected emergency':'emergency',
'unexpected surprise':'surprise',
'unintentional mistake':'mistake',
'unique in his own way':'DELETE',
'united as one':'united',
'until such time as':'until',
'useless in function':'useless',
'utmost perfection':'perfection',
'vacillate back and forth':'vacillate',
'valuable asset':'asset',
'various different':'various',
'very unique':'unique',
'violent explosion':'explosion',
'virtually':'DELETE',
'visible to the eye':'visible',
'warn in advance':'warn',
'of the opinion that':'believe',
'as a society':'society',
'can see that':'AVOID',
'we were found to be in agreement':'we agreed',
'well aware of':'aware',
'in attendance':'attend[ed]',
'what is important is':'DELETE',
'when all is said and done':'DELETE',
'whether or not':'whether/if OR DELETE',
'which have been found to be':'are OR DELETE',
'which is':'DELETE when possible',
'which are':'DELETE when possible',
'which were':'DELETE when possible',
'will come in the future':'will come',
'will have an effect on':'will effect',
'with the possible exception of':'except for',
'who are':'DELETE',
'who was':'DELETE',
'who were':'DELETE',
'the way it does':'that way',
'with regard to':'about/regarding',
'with the exception of':'except for',
'witnessed first hand':'witnessed',
'young in age':'young',
'at the risk of':'risking',
'at / by one':'near',
'at / for a fraction of':'discounted',
'at / from the outset':'initially',
'at / in the end':'finally',
'at / on sight':'immediately',
'at / on the double':'quickly',
'at one time':'once',
'at a disadvantage':'disadvantaged',
'at a discount':'discounted',
'at a distance':'far',
'at a glance':'immediately',
'at a guess':'estimate',
'at a loss':'unable',
'at a moment':'instantly',
'at a price':'costing',
'at a rate of':'at',
'at a speed of':'travelling',
'at a standstill':'stopped',
// 'at all costs':'',               
'at all events':'regardless',       
'at an advantage':'advantaged',
// 'at any cost':'',
// 'at any rate':'',
'at breakfast':'breakfasting/ed',
'at ease with':'peaceful',
// 'at face value':'',
'at fault':'responsible',
// 'at full strength':' ',
'at hand':'near',
// 'at heart':' ',
'at home with':'accepting',
'at issue':'disputing',
'at large':'roaming',
'at length':'eventually',
'at liberty':'free',
'at odds with':'disputing',
'at once':'immediately',
'at peace with':'accept',
'at play':'playing',
'at present':'now',
'at random':'randomly',
'in front of':'before',
'at the age of':'X years old',
'at the beginning':'initially',
'at the expense of':'costing',
'at the foot of':'beneath',
'at the hands of':'subservient to',
'at the height of':'peaking',
'at the latest':'most recent',
// 'at the mercy of':'',
'at the peak of':'cresting',
'at the same time':'simultaneously',
'at the thought of':'thinking',
'at the time of':'during',
'at the top of':'topping',
'at this juncture':'now',
'at times':'sometimes',
'at war with':'fighting',
'at work':'working',
'behind the scenes':'incognito',
'by chance':'possibly',
'by the name of':'named',
'with luck':'luckily',
'by accident':'accidentally',
// 'by all accounts':'',
'by all means':'certainly',
'by coincidence':'coincidentally',
'by courtesy of':'thanks to',
'by degrees':'gradually',
'by design':'intentional',
'by far':'clearly',
'by force':'forcefully',
'by hand':'manually',
'by heart':'memorized',
'by mistake':'mistakenly',
'by nature':'innately',
// 'by no means':'',
// 'by oneself':'',
// 'by order of':'',
// 'by process of':'',
// 'by profession':'',
// 'by reason of':'',
// 'by request':'',
'by rights':'deserve(d)',
'by sight':'immediately',
'by surprise':'surprised',
'by the side of':'aside',
'by virtue of':'by',
'by way of':'via',
'for a good cause':'philathropically',
'for the benefit':'for',
'for a good reason':'justly',
// 'for a change':'',
'for certain':'certainly',
'for fear of':'fearing',
'for good':'completely',
'for granted':'assume(d)',
'for lack of':'lacking',
'for my part':'DELETE',
'for his part':'DELETE',
'for her part':'DELETE',
// 'for their part':'',
'for real':'truly',
'for the good of':'benefitting',
'for the sake of':'for',
'for want of':'lacking',
'in no time':'quickly',
'at the forefront of':'leading',
'in the forefront of':'leading',
'in demand':'demanded/wanted',
'on demand':'demanded/wanted',
'out of focus':'unclear',
'in focus':'clear',
'in one\'s element':'familiar',
'out of season':'not current',
'in season':'current',
'in stock':'available',
'out of touch with':'unfamiliar with',
'in touch with':'familiar with',
'out of use':'obsolete/unused/old',
'in use':'current/used/relevant',
'with difficulty':'not easily',
'in difficulty':'challenged',
'within sight of':'near',
'in sight of':'near',
'in a deep sleep':'slumbering/sleeping',
'in a flash':'quickly',
'in a heap':'heaped',
'in a hurry':'rushing',
'in a mess':'scattered/messy',
'in a pile':'piled',
'in a sense':'somewhat',
'in a temper':'angry',
'in abeyance':'receding/abeying/waning',
'in abundance':'frequent/abundant',
'in accordance with':'DELETE',
'in action':'active',
'in addition to':'and',
'in advance':'before/previous',
'in agony':'agonizing',
'in agreement with':'agreeing',
'in aid of':'helping',
'in all likelihood':'likely',
'in an instant':'instantly',
'in an uproar':'furious/upset/crazed',
'in answer to':'answering',
'in anticipation of':'anticipating',
'in arrears':'late',
'in awe of':'awed by',
'in blossom':'blooming',
'in brief':'briefly',
'in character':'DELETE',
'in charge of':'leading',
'in collaboration with':'with',
'in combination with':'with',
'in command of':'controlling/commanding',
'in common':'sharing',
'in comparison with':'and',
'in compensation for':'for',
'in conclusion':'DELETE',
'in confidence':'confidentially',
'in confinement':'confined',
'in confusion':'confused',
'in conjunction with':'with',
'in connection with':'with',
'in consequence of':'resulting in',
'in contact with':'known/knowing',
'in contrast to':'and/unlike/or',
'in contrast with':'and/unlike/or',
'in control of':'controlling/leading',
'in debt':'owing',
'in decline':'declining',
'in defense of':'defending',
'in detail':'specifically/detailed',
'in disgrace':'disgracefully',
'in disguise':'disguised',
'in disorder':'disordered',
'in dispute':'disputing',
'in distress':'distressed',
'in doubt':'doubting',
'in due course':'DELETE or eventually',
'in duplicate':'twice/repeated/doubled',
'in earnest':'earnestly',
'in effect':'DELETE',
'in error':'wrong',
'in essence':'essentially',
'in excess of':'exceeding',
'in exchange for':'for',
'in existence':'existing/exists',
'in fact':'DELETE',
'in fairness to':'acknowledging',
'in favor of':'favoring',
'in fear of':'fearing',
'in flames':'flaming/burning',
'in flower':'blooming',
'in full':'fully',
'in the future':'next/soon/ahead',
'in gear':'moving',
'in general':'generally',
'in good condition':'pristine/well-maintained',
'in bad condition':'wrecked/worn down',
'in good faith':'sincere(ly)',
'in hand':'holding',
'in harmony with':'agreeing/harmonizing with',
'in haste':'quickly',
'in hiding':'secretly/incognito',
'in high spirits':'upbeat',
'in honor of':'honoring',
'in horror of':'abhorring',
'in isolation':'isolated',
'in its infancy':'beginning/inception',
'in jeopardy':'risking',
'in keeping with':'maintaining',
'in labor':'laboring/giving birth',
'in league with':'allied',
'in length':'DELETE',
'in line with':'follows',
'in love with':'loves',
'in memory of':'remembering/honoring',
'in mid-air':'mid-air',
'in mind':'thinking',
'in moderation':'moderately',
'in mourning':'mourning',
'in name only':'artificial/sinecure',
'in office':'elected/representing',
'in operation':'using/used',
'in opposition to':'opposing',
'in origin':'originally',
'in other words':'basically',
'in pain':'hurting',
'in particular':'specifically',
'in person':'DELETE',
'in pieces':'broken',
'in place of':'replacing',
'in possession of':'owning/possessing',
'in poverty':'impoverished',
'in practice':'traditionally',
'in preference to':'preferring',
'in preparation for':'for/preparing for',
'in principle':'theoretically',
'in private':'privately',
'in progress':'progressing',
'in proportion to':'proportionally/proportionately',
'in proportion with':'proportionately/proportionally',
'in public':'publically',
'in pursuit of':'pursuing',
'in quantity':'amount',
'in question':'DELETE',
'in recognition of':'recognizing',
'in relation to':'relates/relating (to)',
'in reply to':'replying',
'in reserve':'reserved',
'in residence':'residing',
'in respect of':'respecting',
'in response to':'responding to',
'in revenge for':'to avenge',
'in reverse':'backwards/reverse',
'in ruins':'ruined',
'in safety':'safe',
'best interest':'DELETE',
'her opinion':'DELETE or thinks',
'my opinion':'DELETE or think',
'his opinion':'DELETE or thinks',
'in search of':'searching for',
'in secret':'secretly/incognito',
'in self-defense':'defensively',
'in settlement of':'DELETE',
'in silence':'silently',
'in store':'expecting/imminent',
'in succession':'succeeding',
'in support of':'supporting',
'in sympathy with':'sympathizing with',
'in tears':'crying',
'in terror':'terrified',
'in the absence of':'lacking/without',
'in the aftermath':'resulting in',
'in the balance':'DELETE',
'in the case of':'for',
'in the distance':'distantly',
'in the event of':'if',
'in the extreme':'extremely',
'in the eyes of':'according to',
'in the flesh':'DELETE',
'in the form of':'DELETE',
'in the habit of':'usually',
'in the interests of':'for',
'in the lead':'leading',
'in the long run':'eventually',
'in the making':'forming OR REWRITE',
'in the meantime':'meanwhile/simultaneously',
'in the mood for':'desiring/wanting',
'in the name of':'for',
'in the night':'at night',
'in the open':'openly',
'in the process of':'beginning to/starting to',
'in the right':'correct',
'in the seclusion of':'secluded by',
'in the shade':'shaded',
'in the space of':'within',
'in the wake of':'after',
'in the way of':'like',
'in the wrong':'wrong',
'in theory':'theoretically',
'in times of':'during',
'in town':'here/there',
'in trouble':'troubled/embattled',
'in tune with':'agreeing with',
'in turmoil':'disagreeing',
'in turn':'DELETE',
'in unison':'together',
'in vain':'vainly',
'in view of':'considering',
'in vogue':'hip/fashionable/chic',
'of the opinion':'thinks or DELETE',
'on duty':'working',
'off duty':'off',
'off their rocker':'crazy',
'on the watch for':'waiting for/expecting',
'behind':'late',
'on schedule':'punctual',
'off the record':'private(ly)',
'on the record':'public(ly)',
'on the road':'travelling',
'under oath':'sworn',
'under pain of':'DELETE',
'on the air':'playing',
'off the air':'discontinued',
'off balance':'unbalanced',
'on a diet':'dieting',
'on a large scale':'generally',
'on a small scale':'specifically',
'on a regular basis':'regularly',
'on account of':'due to/because of',
'on average':'generally',
'on behalf of':'for',
'on condition that':'assuming/if',
'on credit':'borrowing/lending',
'on display':'displayed',
'on edge':'worried',
'on end':'DELETE',
'on file':'recorded',
'on fire':'burning',
'on foot':'walking',
'on good terms':'amicable/friendly',
'on guard':'guarding',
'on hand':'DELETE',
'on horseback':'horseriding',
'on impulse':'impulsively',
'on leave':'absent/vacationing/travelling',
'on no account':'never',
'on occasion':'occasionally',
'own terms':'DELETE',
'on your own':'individually',
'on her own':'individually',
'on his own':'individually',
'on their own':'individually',
'on one':'individually',
'on paper':'recorded',
'on patrol':'patroling',
'on purpose':'intentionally',
'upon reflection':'DELETE',
'on reflection':'DELETE',
'on sale':'discounted',
'on second thought':'however',
'on show':'displayed',
'on strike':'striking',
'on suspicion of':'suspecting',
'on the agenda':'planned',
'on the assumption':'assuming/if',
'on the brink of':'nearly/almost',
'on the dot':'exactly',
'on the edge of':'nearly/almost',
'on the eve of':'near',
'on the grounds of':'because of',
'on the horizon':'near/soon',
'on the hour':'prompt',
'on the increase':'increasing',
'on the job':'working',
'on the move':'moving',
'on the off-chance':'if',
'on the outskirts':'nearby/near',
'on the part of':'for',
'on the phone':'talking',
'on the point of':'near/close to',
'on the run':'running',
'on the strength of':'based on',
'on the stroke of':'DELETE',
'on the tip of':'near to',
'on the top of':'leading',
'on the understanding that':'given/assuming',
'on the verge of':'almost',
'on the way to':'heading to/toward',
'on time':'prompt',
'on vacation':'vacationing',
'in fashion':'fashionable',
'out of fashion':'unfashionable',
'in print':'current',
'out of print':'discontinued',
'in step':'following',
'out of step':'not following',
'out of breath':'winded/exhausted/tired',
'out of control':'uncontrollable',
'out of curiosity':'DELETE',
'out of date':'outdated',
'out of doors':'outside',
'out of order':'broken',
'out of pity':'sympathizing/pitying',
'out of place':'improper',
'out of reach':'unreachable',
'out of respect for':'honoring',
'out of sight':'unattainable',
'out of spite':'spiteing',
'out of stock':'unavailable',
'out of the ordinary':'unusual',
'out of the question':'impossible',
'out of work':'unemployed',
'through no fault of':'innocently',
'on the contrary':'instead',
'to an extent':'DELETE',
'to date':'DELETE',
'to excess':'excessively',
'to one':'surprisingly',
'to his face':'directly',
'to her face':'directly',
'to my face':'directly',
'to this day':'until now',
'to the best of':'DELETE',
'to the detriment of':'harming',
'to the exclusion of':'excluding',
'to the full':'fully',
'under age':'a minor',
'under arrest':'arrested',
'under consideration':'X is considering',
'under construction':'X is constructing',
'under discussion':'discussing',
'under lock and key':'protected/safeguarded',
'under pressure':'pressured',
'under regulations':'expected',
'under repair':'X is repairing',
'under strain':'straining to',
'under stress':'stressed',
'under suspicion':'suspected of',
'under the command of':'commanded by',
'under the impression that':'thinking/believing that',
'under the influence':'intoxicated/high/drunk',
'under the misapprehension':'assuming',
'without success':'unsuccessfully',
'with success':'successfully',
'with a view to':'DELETE or to',
'with an eye to':'DELETE or to',
'with regret':'regretfully',
'with respect to':'regarding',
'with the aid of':'with',
'with the compliments of':'thanks to',
'with the help of':'thanks to',
'with the intention of':'intending to',
'within reason':'reasonably',
'within grasp':'near',
'within reach of':'attainable/can attain',
'within walking distance':'nearby/near',
'without a doubt':'undoubtedly',
'without doubt':'undoubtedly',
'without a break':'unceasingly',
'without a hitch':'easily',
'without delay':'directly',
'without exception':'universally',
'without fail':'dependably',
'without foundation':'baseless',
'without precedent':'unprecedented',
'without question':'unquestionably',
'without warning':'unexpected',
'whole different':'different',
'do not like':'dislike'
  };
  table ={
    find:[
    ],
    suggestion:[
    ]
  }
  ;

  constructor() { }

  ngOnInit(): void 
  {
    for (var i in this.values) {
          this.table.find.push(i);
          this.table.suggestion.push(this.values[i]);
      }
  }
}


