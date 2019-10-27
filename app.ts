import {Deputy, Faction, VRClass} from "./classes";

const Lilia = new Deputy(160,50,'Lilia','Lesyk', 43, false, 0);
const Petro = new Deputy(183, 150, 'Petro', 'Zhlob', 34, true, 100000);
const Mykola = new Deputy(191, 90, 'Mykola', 'Skob', 24, false, 0);
const Natalia = new Deputy(180, 70, 'Natalia', 'Khytra', 29, true, 75000);
const Viktoriia = new Deputy(165, 45, 'Viktoriia', 'Mazhoruha', 36, true, 98000000);
const Oksana = new Deputy(175, 65, 'Okasana', 'Lapochka', 33, true, 40000);

// Petro.giveBribe(15000);

const Yunyi_Orel = new Faction('Yunyi_Orel', [Mykola, Natalia, Oksana]);
const Ne_Yunyi_Orel = new Faction('Ne_Yunyi_Orel', [Lilia, Petro, Viktoriia]);

// Yunyi_Orel.sumOfBribes();

const VR = new VRClass([Yunyi_Orel, Ne_Yunyi_Orel]);

VR.showBiggestBriberOfFraction('Yunyi_Orel');