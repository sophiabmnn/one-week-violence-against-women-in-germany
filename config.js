var config = {
    style: 'mapbox://styles/sophiabaumann/cmd97ede300po01sa5yelfueq',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoic29waGlhYmF1bWFubiIsImEiOiJjbWMxNHdyOHkwOXdmMmxwdTBvYnE5b2tvIn0.aEFmzKi2rR4rrcoPIjfCnA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'One week of violence against women in Germany',
    subtitle: 'According to official statistics, roughly 50,000 women in Germany become victims of sexual violence every year. A staggering 180,000 more are affected by domestic violence. These figures are so high that one can barely imagine them. But what does this mean for a single week in Germany?',
    byline: 'By Sophia Baumann',
    footer: 'Note: This website is an exercise for the Lede data journalism program at Columbia University. Text and data have not been editorially reviewed or fact-checked. <br><br> Method: German police press releases were scraped from <a href="https://www.presseportal.de/"> presseportal.de</a> in the period from 06/30/2025 to 07/06/2025 and categorized into “violence against women” and “no violence against women” using an AI model. You can find my notebook and more information on <a href= "https://github.com/sophiabmnn/ViolenceAgainstWomen-Lede-Project-2"> GitHub</a>. <br><br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'First Incident',
            alignment: 'left',
            hidden: false,
            description: 'It is Monday, 9.20 a.m., when the first report is published. The police in Dortmund, a city in the West Germany, announces: A 41-year-old man harassed a 16-year-old girl at the central station. He allegedly grabbed her and looked at her cleavage. When her friend urged him to stop, he poured his beer in direction of the young woman.',
            location: {
                center: [7.465298100000001,51.5135872],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'firstincident-03r4y1',
                     opacity: 0,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'firstincident-03r4y1',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'First Day',
            alignment: 'right',
            hidden: false,
            description: 'This will not remain the only report of violence against women on this day. On June 30, 2025 alone, police stations in Germany will report at least seven other alleged crimes targeting women: A man who allegedly harassed several teenagers while out swimming. Two cases in which men are reported to have undressed in public before women without consent. <br><br> And a report about a 32-year-old woman and her daughter whose bodies were found in the woods in a village near Recklinghausen. The autopsy revealed violent force, according to the police.',
            location: {
                center: [7.465298100000001,51.5135872],
                zoom: 5,
                pitch: 60,
                bearing: 0,
                speed: 1,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                
                {
                     layer: 'monday-9ke4g0',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'monday-9ke4g0',
                    opacity: 0

                }
            ]
        },
        {
            id: 'Whole Week',
            alignment: 'left',
            hidden: false,
            description: 'By the end of the week from June 30 to July 6, 2025, at least 57 reports of violence against women will have been published. <br><br> This is the result of research based on reports from local police stations, which were collected <a href="https://www.presseportal.de/"> on the press portal of the news agency “news aktuell”</a>.',
            location: {
                center: [7.465298100000001,51.5135872],
                zoom: 5,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'wholedata-b4uxes',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'wholedata-b4uxes',
                    opacity: 0
                }   
            ]
        },
        {
            id: 'Forms of Violence',
            alignment: 'fully',
            hidden: false,
            image: './assets/types-of-violence.svg',
            alt: 'In the week from 06/30/2025 to 07/06/2025, 27 cases of harassment, 26 cases of physical violence and 4 cases of homicide were counted.',
            description: 'The reports alarmingly show many different forms of violence against women are reported in Germany in just one week. <br><br> Women in the reports were presumably harassed at least 27 times, for example verbally threatened. In a further 26 cases, physical violence was allegedly involved, ranging from being grabbed to beatings and sexual violence. Four reports involved fatalities, as in the case of the two bodies in the forest near Recklinghausen.',
            location: {
                center: [7.465298100000001,51.5135872],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'wholedata-typesofviolence',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'wholedata-typesofviolence',
                    opacity: 0
                }
            ]
        },
            {
            id: 'Frankfurt',
            alignment: 'left',
            hidden: false,
            description: 'In most cases, the fatal victims are women - but sometimes they include third parties. In Frankfurt, for example, a man allegedly injured his ex-partner with a knife in an apartment that week. There was another person in the flat, who the man also attacked and killed, according to the police. The alleged perpetrator is now facing charges of murder and attempted murder.',
            location: {
                center: [8.6821267,50.1109221],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'homicide-a8hs3f',
                     opacity: 0,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'homicide-a8hs3f',
                    opacity: 0
                }
            ]
        },
                {
            id: 'Limitations',
            alignment: 'right',
            hidden: false,
            description: 'Despite the numerous reports, these are certainly not all the cases of violence against women that have actually happened in Germany during this week. <br><br> Firstly, police stations are unlikely to issue press releases about all crimes involving violence against women. Often, these reports are also somewhat delayed. This means that the data may not contain all cases of that week, but includes reports on cases which occurred in previous weeks. <br><br> Secondly, the categorization of the reports was supported by artificial intelligence (AI). Every report that the AI categorized as violence against women was checked manually - but it is possible that reports of violence against women were being missed. <br><br>Thirdly, and probably most importantly, dark field studies show: Not all women experiencing violence report to the police.',
            location: {
                center: [8.6821267,50.1109221],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'wholedata-typesofviolence',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'wholedata-typesofviolence',
                    opacity: 0
                }
            ]
        },
            {
            id: 'Public Private',
            alignment: 'fully',
            hidden: false,
            image: './assets/publicprivate.svg',
            alt: 'For cases reported in the week from 06/30/2025 to 07/06/2025, 49% occurred in the public, 28 percent in a private environment and for 23% the relation between victim and perpetrator remained unclear.',
            description: 'A simple comparison illustrates how incomplete the data actually might be: almost 50 percent of the reported cases in that week occurred in public, while in a further 28 percent no information was revealed about the relationship between the perpetrator and the victim. Only 23 percent took place in private. <br><br> In reality, however, according to experts, the perpetrators are often part of the womens private environment, are for example their partners or ex-partners. In these cases, women may find it particularly difficult to report the violence to the police.',
            location: {
                center: [8.6821267,50.1109221],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'wholedata-typesofviolence',
                     opacity: 1,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'wholedata-typesofviolence',
                    opacity: 0
                }
            ]
        },
                    {
            id: 'The End',
            alignment: 'fully',
            hidden: false,
            description: 'The 57 cases in the week from June 30 to July 6, 2025 are therefore probably only a small part of the picture. <br><br>A fragment, but one that shows clearly what it means that tens of thousands of women in Germany are affected by violence every year.',
            location: {
                center: [8.6821267,50.1109221],
                zoom: 3,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'wholedata-typesofviolence',
                     opacity: 0,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'wholedata-typesofviolence',
                    opacity: 0
                }
            ]
        },
    ]
};
