const CAMERAS = [
  {
    "id": "camera-1",
    "name": "Canon EOS 90D",
    "category": "DSLR",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "32.5 MP",
    "video": "4K / 30 fps",
    "lens": "Confirm kit lens",
    "sensor": "APS-C",
    "fourK": true,
    "manual": "https://drive.google.com/file/d/1xGJpe66AE2kohfKAfRHRzjE6OmYlEgQM/view?usp=drive_link",
    "units": [
      "Canon 90D DSLR Kit - CU006725",
      "Canon 90D DSLR Kit - CU006728",
      "Canon 90D DSLR Kit - CU006731",
      "Canon 90D DSLR Kit - CU006734",
      "Canon 90D - CU006702",
      "Canon 90D - CU006703",
      "Canon 90D - CU006704",
      "Canon 90D - CU006705"
    ],
    "description": "Learn photographic control with interchangeable lenses and an optical viewfinder.",
    "tradeoff": "Bring a separate microphone for interviews and a tripod for steady video.",
    "specSource": "Canon specifications",
    "specUrl": "https://www.usa.canon.com/shop/p/refurbished-eos-90d-body"
  },
  {
    "id": "camera-2",
    "name": "Canon EOS 80D",
    "category": "DSLR",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "24.2 MP",
    "video": "1080p / 60 fps",
    "lens": "18–135 mm",
    "sensor": "APS-C",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1HDB2PhfNJt9kDftoOH7PCxJ0BoTBZUSk/view?usp=sharing",
    "units": [
      "Canon EOS 80D Kit - CU006532",
      "Canon EOS 80D Kit - CU006533",
      "Canon EOS 80D Kit - CU006534",
      "Canon EOS 80D Kit - CU006535",
      "Canon EOS 80D Kit - CU006536"
    ],
    "description": "Learn photographic control with interchangeable lenses and an optical viewfinder.",
    "tradeoff": "Full HD video is documented; choose a verified 4K model if your project requires 4K.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-3",
    "name": "Canon EOS R10",
    "category": "Mirrorless",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "24.2 MP",
    "video": "4K / 30 fps",
    "lens": "18–45 mm",
    "sensor": "APS-C",
    "fourK": true,
    "manual": "https://drive.google.com/file/d/1K3_WnNLz2TV1wWmGUWindCx2ZuDnKSVA/view?usp=drive_link",
    "units": [
      "Canon EOS R10 Mirrorless Kit - 6580",
      "Canon EOS R10 Mirrorless Kit - 6581",
      "Canon EOS R10 Mirrorless Kit - 6582",
      "Canon EOS R10 Mirrorless Kit - 6583"
    ],
    "description": "An interchangeable-lens option for still photography and video.",
    "tradeoff": "The guide lists an RF-S kit lens. Canon EF / EF-S lenses need an EF-EOS R adapter.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-4",
    "name": "Canon EOS R5",
    "category": "Mirrorless",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon EOS R5 Kit"
    ],
    "description": "An interchangeable-lens option for still photography and video.",
    "tradeoff": "Check lens compatibility before adding another lens.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-5",
    "name": "Nikon D3400",
    "category": "DSLR",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1mVmA2_3C9V8UU-01RW_Lm2VDHEz-N4t3/view?usp=drive_link",
    "units": [
      "Nikon D3400 DSLR Camera  - 6371",
      "Nikon D3400 DSLR Camera - 6286"
    ],
    "description": "Learn photographic control with interchangeable lenses and an optical viewfinder.",
    "tradeoff": "Bring a separate microphone for interviews and a tripod for steady video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-6",
    "name": "Nikon D3500",
    "category": "DSLR",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "24.2 MP",
    "video": "1080p / 60 fps",
    "lens": "18–55 mm",
    "sensor": "DX / APS-C",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1JkZ9CMdluaUNOfY-1vFEx75glTQI12PS/view?usp=drive_link",
    "units": [
      "Nikon D3500 DSLR Camera - 6452",
      "Nikon D3500 DSLR Camera - 6458"
    ],
    "description": "Learn photographic control with interchangeable lenses and an optical viewfinder.",
    "tradeoff": "Full HD video is documented; choose a verified 4K model if your project requires 4K.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-7",
    "name": "Nikon D5500",
    "category": "DSLR",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "24.2 MP",
    "video": "1080p / 60 fps",
    "lens": "18–55 mm",
    "sensor": "DX / APS-C",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1qnIeg5_VDLd2Jd8feXl2J_Mzgjk8BUKA/view?usp=sharing",
    "units": [
      "Nikon D5500 - CU006608",
      "Nikon D5500 - CU006609",
      "Nikon D5500 - CU006610",
      "Nikon D5500 - CU006611"
    ],
    "description": "Learn photographic control with interchangeable lenses and an optical viewfinder.",
    "tradeoff": "Full HD video is documented; choose a verified 4K model if your project requires 4K.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-8",
    "name": "Nikon D7500",
    "category": "DSLR",
    "goals": [
      "photo",
      "video"
    ],
    "mp": "20.9 MP",
    "video": "4K / 30 fps",
    "lens": "18–140 mm",
    "sensor": "DX / APS-C",
    "fourK": true,
    "manual": "https://drive.google.com/file/d/1TjcQrVk5W4QaInXaqdEqJ9U1zMXuxwxH/view?usp=sharing",
    "units": [
      "Nikon D7500 Kit - CU006616",
      "Nikon D7500 Kit - CU006617",
      "Nikon D7500 Kit - CU006618",
      "Nikon D7500 Kit - CU006619",
      "Nikon D7500 Kit - CU006779"
    ],
    "description": "Learn photographic control with interchangeable lenses and an optical viewfinder.",
    "tradeoff": "Bring a separate microphone for interviews and a tripod for steady video.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-9",
    "name": "Blackmagic Design Pocket Cinema",
    "category": "Cinema",
    "goals": [
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Blackmagic Design Pocket Cinema camera"
    ],
    "description": "A filmmaking option. Confirm the exact model, recording media, and workflow with DLMC.",
    "tradeoff": "The report does not identify the generation; specifications cannot be assumed.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-10",
    "name": "Canon Vixia HF M31",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon Vixia HF M31 - 1646",
      "Canon Vixia HF M31 - 1653"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-11",
    "name": "Canon Vixia HF M32",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon Vixia HF M32 - 6054"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-12",
    "name": "Canon Vixia HF R52",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "3.28 MP",
    "video": "1080p / 60 fps",
    "lens": "Built-in",
    "sensor": "1/4.85 CMOS",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon Vixia HF R52 - 5965",
      "Canon Vixia HF R52 - 5966",
      "Canon Vixia HF R52 - 5967",
      "Canon Vixia HF R52 - 5979",
      "Canon Vixia HF R52 - 6164",
      "Canon Vixia HF R52 - 9570",
      "Canon Vixia HF R52 - 9604"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-13",
    "name": "Canon Vixia HF R60",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon Vixia HF R60 - 6259",
      "Canon Vixia HF R60 - 6260"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-14",
    "name": "Canon Vixia HF R62",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "3.28 MP",
    "video": "1080p / 60 fps",
    "lens": "Built-in",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon Vixia HF R62 - 6234",
      "Canon Vixia HF R62 - 6235",
      "Canon Vixia HF R62 - 6236",
      "Canon Vixia HF R62 - 6237"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "DLMC DSLR + Lens Guide",
    "specUrl": null
  },
  {
    "id": "camera-15",
    "name": "Canon Vixia HF R72",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Canon Vixia HF R72 - 6289",
      "Canon Vixia HF R72 - 6290",
      "Canon Vixia HF R72 - 6291"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-16",
    "name": "Canon Vixia HG20",
    "category": "Camcorder",
    "goals": [
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1dVi_OagpXPTHn5bJfvgJD3sxdZn3HK9v/view?usp=sharing",
    "units": [
      "Canon Vixia HG20 - 4634",
      "Canon Vixia HG20 - 5376",
      "Canon Vixia HG20 - 5404",
      "Canon Vixia HG20 - 6088",
      "Canon Vixia HG20 - 6104"
    ],
    "description": "A dedicated video camera with a built-in lens. Keep the setup straightforward.",
    "tradeoff": "Choose an interchangeable-lens camera if lens control is central to your project.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-17",
    "name": "GoPro Hero",
    "category": "Action",
    "goals": [
      "action",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/16HJGl8bMaMHlhFliOnUH4--e0N2vkkNK/view?usp=drive_link",
    "units": [
      "GoPro (Hero) Camera - 08",
      "GoPro (Hero) Camera - 09",
      "GoPro (Hero) Camera - 10",
      "GoPro (Hero) Camera - 11",
      "GoPro (Hero) Camera - 12",
      "GoPro (Hero) Camera - 13"
    ],
    "description": "A compact option for movement and point-of-view footage. Ask DLMC about suitable mounts.",
    "tradeoff": "Confirm the mount and housing for your activity before checkout.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-18",
    "name": "GoPro Hero3",
    "category": "Action",
    "goals": [
      "action",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "GoPro (Hero3) Camera - 5942",
      "GoPro (Hero3) Camera - 5945"
    ],
    "description": "A compact option for movement and point-of-view footage. Ask DLMC about suitable mounts.",
    "tradeoff": "Confirm the mount and housing for your activity before checkout.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-19",
    "name": "GoPro Hero3+",
    "category": "Action",
    "goals": [
      "action",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "GoPro (Hero3+) Camera"
    ],
    "description": "A compact option for movement and point-of-view footage. Ask DLMC about suitable mounts.",
    "tradeoff": "Confirm the mount and housing for your activity before checkout.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-20",
    "name": "GoPro Hero4 Black",
    "category": "Action",
    "goals": [
      "action",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "GoPro (Hero4 Black) Camera - 6264",
      "GoPro (Hero4 Black) Camera - 6265",
      "GoPro (Hero4 Black) Camera - 6266"
    ],
    "description": "A compact option for movement and point-of-view footage. Ask DLMC about suitable mounts.",
    "tradeoff": "Confirm the mount and housing for your activity before checkout.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-21",
    "name": "GoPro Hero7 Black",
    "category": "Action",
    "goals": [
      "action",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1on-8Qg1_TNJ9D2JRv9Co-2CrIoOeBcQR/view?usp=drive_link",
    "units": [
      "GoPro (Hero7 Black) Camera - 6410",
      "GoPro (Hero7 Black) Camera - 6411",
      "GoPro (Hero7 Black) Camera - 6412",
      "GoPro (Hero7 Black) Camera - 6413",
      "GoPro (Hero7 Black) Camera - 6463",
      "GoPro (Hero7 Black) Camera - 6464"
    ],
    "description": "A compact option for movement and point-of-view footage. Ask DLMC about suitable mounts.",
    "tradeoff": "Confirm the mount and housing for your activity before checkout.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-22",
    "name": "GoPro Fusion 360°",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1mvzhxC_yEaWjRKm1RpJjNtjzj3BR06pF/view?usp=drive_link",
    "units": [
      "GoPro Fusion 360 Camera - 6335",
      "GoPro Fusion 360 Camera - 6336",
      "GoPro Fusion 360° Camera - 6401",
      "GoPro Fusion 360° Camera - 6402",
      "GoPro Fusion 360° Camera - 6403",
      "GoPro Fusion 360° Camera - 6404"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-23",
    "name": "GoPro MAX 360",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "GoPro MAX 360 Camera - CU006723"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-24",
    "name": "Insta360 Ace Pro 2",
    "category": "Action",
    "goals": [
      "action",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Insta360 Ace Pro 2 - CU006771",
      "Insta360 Ace Pro 2 - CU006772",
      "Insta360 Ace Pro 2 - CU006773",
      "Insta360 Ace Pro 2 - CU006774",
      "Insta360 Ace Pro 2 - CU006775",
      "Insta360 Ace Pro 2 - CU006776"
    ],
    "description": "A compact option for movement and point-of-view footage. Ask DLMC about suitable mounts.",
    "tradeoff": "Confirm the mount and housing for your activity before checkout.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-25",
    "name": "Insta360 ONE",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Insta360 ONE cameras - 6414"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-26",
    "name": "Insta360 One X2",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Insta360 One X2 - CU006755",
      "Insta360 One X2 - CU006756"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-27",
    "name": "Liiv360 Action 360°",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Liiv360 Action 360° Camera - 6304"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-28",
    "name": "Nikon KeyMission 360°",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Nikon KeyMission 360° Camera - 6306",
      "Nikon KeyMission 360° Camera - 6337"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-29",
    "name": "Ricoh Theta S 360°",
    "category": "360",
    "goals": [
      "360"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": "https://drive.google.com/file/d/1QdYEMuESskTHmgt4hWxHyA98Vpht9XlQ/view?usp=drive_link",
    "units": [
      "Ricoh Theta S 360° Camera - 6305",
      "Ricoh Theta S 360° Camera - 6311",
      "Ricoh Theta S 360° Camera - 6312"
    ],
    "description": "Capture in every direction. Plan time for 360 editing and exporting.",
    "tradeoff": "360 footage needs a different editing workflow from conventional video.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-30",
    "name": "Zoom Q2N-4K",
    "category": "Audio + video",
    "goals": [
      "performance",
      "video"
    ],
    "mp": "Not documented",
    "video": "Not documented",
    "lens": "Confirm with DLMC",
    "sensor": "Not documented",
    "fourK": false,
    "manual": null,
    "units": [
      "Zoom Q2N-4K Handy Video Recorder - CU006718",
      "Zoom Q2N-4K Handy Video Recorder - CU006719"
    ],
    "description": "A dedicated video recorder for performances and projects where sound matters.",
    "tradeoff": "Check audio connections and do a short sound test before recording.",
    "specSource": "Not documented in supplied guide",
    "specUrl": null
  },
  {
    "id": "camera-31",
    "name": "Zoom Q8n-4K",
    "category": "Audio + video",
    "goals": [
      "performance",
      "video"
    ],
    "mp": "Not documented",
    "video": "4K / 30 fps",
    "lens": "Built-in",
    "sensor": "Not documented",
    "fourK": true,
    "manual": "https://drive.google.com/file/d/1LNZCXs82i_Tq0k8ux_VLA-r1gkE4I9aW/view?usp=drive_link",
    "units": [
      "Zoom Q8n-4K - CU006687",
      "Zoom Q8n-4K - CU006688",
      "Zoom Q8n-4K - CU006720",
      "Zoom Q8n-4K - CU006722"
    ],
    "description": "A dedicated video recorder for performances and projects where sound matters.",
    "tradeoff": "Built-in XY microphones and two XLR inputs suit performance recording. Test sound levels first.",
    "specSource": "Zoom product documentation",
    "specUrl": "https://zoomcorp.com/en/gb/video-recorders/video-recorders/q8n-4k/"
  }
];
