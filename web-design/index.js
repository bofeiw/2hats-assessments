// mock data only, not included in html

const ASSETS = {
    mockup:
        'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2FMockup.png?alt=media&token=86310acc-1373-44a9-a3c9-ddd0580f9b11',
    hero:
        'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fhero.png?alt=media&token=83f29b93-3c2e-4e50-8641-0eda16a0d960',
};

const ITEMS = [
    {
        title: 'Walnut Speakers & Amp',
        price: 599,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fwalnut_speakers.png?alt=media&token=d93fffb6-934f-4e5b-894f-53dd76f12758',
    },
    {
        title: 'Maple Lamp',
        price: 109,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fmaple_lamp.png?alt=media&token=dbf69300-4590-4490-ab14-82c901b50e9f',
    },
    {
        title: 'Walnut Planter',
        price: 39,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fwalnut_planter.png?alt=media&token=b7692959-ef86-474d-8166-5db596de1c0a',
    },
    {
        title: 'M18 Chair, Grey Wool Felt',
        price: 330,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fm18_chair.png?alt=media&token=e85dfda9-3354-4917-8b29-5fc10967ac79',
    },
    {
        title: 'Pliot Stool, Black',
        price: 265,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fpilot_stool.png?alt=media&token=e2dde4e8-60ba-476a-b208-4d5d2e7e96e5',
    },
    {
        title: 'B&O BeoPlay A9 - Rose Gold',
        price: 2999,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fbeoplay.png?alt=media&token=d5529aa4-0489-4b2b-987d-6ae27c9391bf',
    },
    {
        title: 'Joey Roth CRM-001 Ceramic',
        price: 495,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fjoey_roth.png?alt=media&token=d4a1b728-e23d-41e6-bee2-7e186ba99d78',
    },
    {
        title: 'V5BT Bamboo Speaker',
        price: 200,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fv5bt_bamboo.png?alt=media&token=9427be8b-ed72-4707-91bb-00a78f755c4f',
    },
    {
        title: 'Walnut iPhone Case',
        price: 79,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fwalnut_iphone.png?alt=media&token=582a2057-44c8-4188-a4c8-18ed150989df',
    },
    {
        title: 'Walnut Watch (Round)',
        price: 239,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fwalnut_watch.png?alt=media&token=7b6cff3c-6a0e-4249-bebb-d3bb1978bc70',
    },
    {
        title: 'Polk Audio Wireless',
        price: 705,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fpolk_audio.png?alt=media&token=bf4f68f5-e9c6-4a75-bc35-aacb55986a63',
    },
    {
        title: 'Zebra Series Varberg Table',
        price: 89,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fzebra_series.png?alt=media&token=92a63799-6e87-44ce-8c15-68f3d160d3be',
    },
    {
        title: 'POTS Pedestal Set',
        price: 67,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fpots_pedestal.png?alt=media&token=1b21646c-5d4d-41d7-8cf0-212e1a5dab0d',
    },
    {
        title: 'SoundLink Bluetooth Mobile',
        price: 300,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fsoundlink_bluetooth.png?alt=media&token=5d8029fc-1760-4b22-b293-9ac29eb3d251',
    },
    {
        title: 'Wall Clock OJ Black 31.5"',
        price: 100,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fwall_clock.png?alt=media&token=41a3acb0-6b08-4146-9706-f22ac05905c0',
    },
    {
        title: 'Cherry Wood Graph 3-Pack',
        price: 10,
        image:
            'https://firebasestorage.googleapis.com/v0/b/production2hats.appspot.com/o/studentPortal%2Fassessment-web-design%2Fcherry_wood.png?alt=media&token=a70a9ac4-21a1-4933-8a41-f214debcff57',
    },
];
