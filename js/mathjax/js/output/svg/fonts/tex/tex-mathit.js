"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FontData_js_1 = require("../../FontData.js");
var tex_mathit_js_1 = require("../../../common/fonts/tex/tex-mathit.js");
exports.texMathit = FontData_js_1.AddPaths(tex_mathit_js_1.texMathit, {
    0x41: '85 46Q112 48 132 56T161 73T176 92T185 104Q185 106 353 407T524 709Q527 716 551 716Q568 716 572 712Q573 711 574 710Q576 708 594 384Q613 54 617 52H618Q626 46 672 46H689Q696 41 696 36Q696 13 683 0H670Q639 2 557 2Q526 2 500 2T459 2T441 1Q425 1 425 10Q425 12 427 24Q428 27 429 31T430 36T432 40T434 43T437 45T443 46T450 46Q514 46 514 69Q514 74 511 136L506 209H292L260 152Q222 84 222 74Q222 48 264 46Q280 46 280 35Q280 33 278 21Q275 7 272 4T259 0Q256 0 232 1T159 2Q135 2 109 1T78 0Q58 0 58 10Q58 14 61 26T66 40Q68 46 85 46ZM504 260Q503 263 496 407T486 553L466 520Q446 486 402 406L318 256Q318 255 411 255H504V260',
    0x42: '57 11Q57 38 69 45L74 46Q78 46 85 46T99 46Q134 47 145 50T162 62Q164 66 233 344T303 626Q303 627 302 629V631Q296 637 241 637H223Q217 642 217 645T219 664Q223 677 229 683H411L593 682L605 680Q616 678 628 675T660 662T694 639T720 601T732 547Q732 519 726 503Q710 452 662 414T556 360L545 357L556 355Q604 346 641 312T678 221Q678 155 622 92T482 8Q459 2 439 2T256 0H154H105Q74 0 66 2T57 11ZM629 549Q628 550 629 557T627 576T619 600T601 622T570 636Q564 637 490 637Q472 637 454 637T424 636T411 636Q399 635 395 622T364 500Q333 377 332 376Q332 374 408 374L485 375L495 377Q547 390 588 437T629 549ZM504 336Q500 337 410 337Q323 337 322 336Q322 334 305 263T270 122T252 51Q252 47 337 46Q346 46 361 46T384 45Q425 45 455 55T515 95Q574 156 574 235Q574 276 555 304T504 336',
    0x43: '395 -21Q279 -21 215 56T150 244Q150 402 265 543Q339 630 421 667T562 704Q596 704 604 703Q627 698 647 689T679 669T699 649T711 633T716 627L753 665Q790 704 792 704Q793 705 798 705Q812 705 812 698Q812 694 780 561Q744 422 744 421Q742 416 739 415T721 413H705Q699 419 699 426Q701 432 701 444Q705 464 705 493Q705 524 700 551T681 604T643 644T583 659Q480 659 387 570Q321 502 287 397T252 213Q252 123 297 74Q347 24 421 24Q500 24 564 89T653 240Q656 253 659 255T677 257Q700 257 700 248Q700 242 694 222Q681 183 656 143T593 65T504 3T395 -21',
    0x44: '56 11Q56 38 68 45L72 46Q77 46 84 46T98 46Q133 47 144 50T161 62Q163 66 232 344T302 626Q302 627 302 629L301 631Q295 637 240 637H222Q216 642 216 645T218 664Q222 677 228 683H403Q582 683 589 682Q672 674 723 608T775 440Q775 312 709 209T562 54Q502 14 432 2Q423 1 243 0H148H102Q72 0 64 2T56 11ZM254 51Q254 46 348 46Q395 46 422 50T484 71Q585 121 633 255Q679 396 679 477Q679 522 665 554T629 603T587 626T548 636Q547 636 536 636T510 636T480 637Q420 637 411 636T398 627Q396 623 325 339T254 51',
    0x45: '248 634Q216 634 214 638Q213 641 213 646Q213 674 224 678Q226 680 481 680H736Q743 676 743 669Q743 665 729 557T713 447Q711 440 690 440H675Q667 445 667 454Q667 455 671 481T675 536Q675 583 658 604T592 632Q574 634 475 634Q439 634 424 633T405 631T399 625Q397 622 367 501T336 377Q336 376 367 376H388Q451 376 477 389Q493 399 503 419T520 462T528 489Q531 493 549 493Q557 493 561 492T566 491T569 488T572 483L539 351Q507 221 503 216Q503 216 500 213H484Q468 213 465 216Q461 219 461 225Q461 228 466 250T472 290Q472 317 452 323T368 330H324Q323 326 289 191T255 51T331 46H360Q413 46 444 49T511 67T570 113Q589 137 608 175T638 242T652 272Q656 274 670 274Q693 274 693 262L648 148Q590 4 588 2Q585 0 323 0H61Q54 4 54 11Q54 27 61 41Q65 46 95 46Q131 47 142 50T159 62L194 200Q229 337 264 477T299 623Q299 630 292 631T248 634',
    0x46: '299 623Q299 630 292 631T247 634H219Q213 640 213 642T215 661Q218 673 225 680H724Q731 676 731 669Q731 665 717 557T701 447Q699 440 678 440H663Q656 444 656 452Q656 457 659 485T663 538Q663 586 644 607T566 633Q564 633 535 633T486 634H458Q404 634 399 625Q396 620 364 492L332 363H380Q446 365 464 373Q496 389 514 458Q518 477 523 479Q527 480 541 480H556Q563 475 563 470Q563 467 532 339T498 207Q496 200 475 200H460Q453 207 453 212Q454 213 456 225T461 254T464 278Q464 304 445 310T369 317H321L289 190Q257 66 257 59Q257 54 261 52T283 48T337 46Q348 46 352 46T360 45T366 42T368 37Q368 32 365 23Q360 4 355 2Q352 1 342 1Q336 1 297 1T199 2Q138 2 106 2T71 1H68Q54 1 54 11Q54 38 66 45L70 46Q75 46 82 46T96 46Q131 47 142 50T159 62L194 200Q229 337 264 477T299 623',
    0x47: '632 -1Q629 -1 622 5T604 25T583 53Q508 -22 394 -22Q287 -22 219 52T150 244Q150 402 265 543Q339 630 421 667T562 704Q596 704 604 703Q627 698 647 689T679 669T699 649T711 633T716 627L753 665Q790 704 792 704Q793 705 798 705Q812 705 812 698Q812 694 780 561Q744 422 744 421Q742 416 739 415T721 413H705Q699 419 699 426Q701 432 701 444Q705 464 705 493Q705 524 700 551T681 604T643 644T583 659Q480 659 387 570Q319 501 286 394T252 208Q252 156 269 118T314 61T369 33T425 24Q470 24 509 46T566 104Q571 116 583 162T595 214Q595 222 583 223Q561 227 517 227H495Q488 230 488 238Q488 254 495 268Q500 273 511 273Q515 273 532 273T581 272T649 271Q731 271 752 273H761Q767 267 767 264T765 246Q761 233 755 227H742Q698 227 693 213L639 4Q636 -1 632 -1',
    0x48: '61 0Q54 7 54 11Q54 27 61 41Q65 46 95 46Q131 47 142 50T159 62Q161 66 230 344T300 626Q300 627 300 629L299 631Q293 637 238 637H220Q214 642 214 645T216 664Q220 677 226 683H239Q307 681 372 681Q480 681 486 683H496Q502 677 502 674T500 656Q496 643 490 637H472Q418 637 406 630Q400 627 396 612T367 500Q360 474 352 442T340 395L336 380Q336 378 466 378H596Q657 622 657 626Q657 627 656 629V631Q650 637 595 637H577Q571 642 571 645T573 664Q577 677 583 683H596Q664 681 729 681Q837 681 843 683H853Q860 676 860 672Q858 647 848 637H819Q783 636 772 634T756 623Q753 618 684 340T614 57Q614 50 621 49T666 46Q697 46 699 40Q701 37 698 21Q693 3 689 1Q686 0 677 0Q673 0 657 0T611 1T546 2Q453 2 428 0H418Q411 7 411 11Q411 27 418 41Q422 46 452 46Q488 47 499 50T516 62Q517 64 550 196T584 331Q584 332 454 332H324L291 197Q257 64 257 56Q257 50 265 49T309 46Q340 46 342 40Q344 37 341 21Q336 3 332 1Q329 0 320 0Q316 0 300 0T254 1T189 2Q96 2 71 0H61',
    0x49: '235 637Q217 637 213 638T209 649Q209 673 220 682Q222 683 237 683Q278 681 369 681Q404 681 441 682T483 683Q499 683 503 681T508 672Q508 670 505 658T500 643Q498 637 464 637Q425 635 415 633T398 621Q396 618 327 340T257 58T260 52T278 48T322 46Q349 46 349 36Q349 31 346 22Q342 4 337 1Q336 1 334 1T329 0Q325 0 307 0T258 1T190 2Q95 2 67 0H56Q49 7 49 11Q51 38 62 46H91Q129 47 141 50T159 62Q161 66 230 344T300 625Q300 637 235 637',
    0x4A: '361 637Q333 637 331 641Q330 644 330 649Q330 673 341 682Q343 683 360 683Q405 681 500 681Q551 681 577 681T607 682Q622 682 622 673Q622 665 616 647Q614 640 610 639T587 637Q547 636 541 624Q538 618 477 374T413 124Q391 64 333 22T207 -21T109 12T78 86Q78 130 101 150T149 170Q193 170 196 129Q196 100 178 80T137 58L132 57Q134 52 138 46T160 28T205 16Q242 16 273 48T319 122Q322 129 383 371T444 627Q444 637 361 637',
    0x4B: '668 621Q668 635 645 637Q629 637 629 648Q629 650 632 662T637 677Q640 682 653 682Q657 682 688 681T764 680Q786 680 810 681T839 682Q859 682 859 672Q859 655 852 643Q849 637 839 637Q804 637 768 621T717 595T697 578Q696 578 600 497L505 417L508 408Q543 311 574 227T618 106T632 69Q645 47 688 46H707Q713 38 713 37T710 19Q706 6 700 0H688Q659 2 587 2Q557 2 532 2T492 2T474 1Q458 1 458 10Q458 13 460 23Q464 39 466 42T480 46Q526 46 526 72Q526 75 476 213L427 350Q426 350 396 325T334 272T302 242Q302 241 299 230T290 194T279 150Q257 61 257 55Q257 50 265 49T309 46H337Q343 40 343 38T341 19Q337 6 331 0H316Q280 2 190 2Q158 2 131 2T89 2T70 1Q54 1 54 11Q54 38 66 45L70 46Q75 46 82 46T96 46Q131 47 142 50T159 62Q161 66 230 344T300 626Q300 627 300 629L299 631Q293 637 238 637H220Q214 642 214 645T216 664Q220 677 226 683H239Q307 681 372 681Q386 681 414 681T464 682L487 683H496Q502 677 502 674T500 656Q495 641 491 637H462Q426 636 415 634T399 623Q396 618 358 467L320 314Q321 314 484 452Q510 474 552 509Q625 570 646 590T668 621',
    0x4C: '61 0Q54 4 54 11Q54 27 61 41Q65 46 95 46Q131 47 142 50T159 62Q161 66 230 344T300 626Q300 627 300 629L299 631Q293 637 238 637H220Q214 642 214 645T216 664Q220 677 226 683H240Q275 681 371 681Q407 681 438 681T487 682T509 682Q527 682 527 674Q527 670 524 659Q523 657 523 654T522 649T520 645T519 642T517 640T515 639T512 638T507 637T502 637T494 637H478Q433 636 417 633T396 617Q395 614 325 334T255 51Q255 47 319 47Q387 47 410 52Q459 65 494 98T543 163T570 229T589 273H622Q628 264 628 262Q628 259 584 133T539 5Q537 1 511 1Q482 0 296 0H61',
    0x4D: '72 1Q58 1 58 11Q58 33 66 41Q68 46 87 46Q150 50 168 84Q172 91 238 356T304 626Q304 627 304 629L303 631Q297 637 242 637H224Q218 642 218 645T220 664Q224 677 230 683H326H394Q417 683 422 682T429 676L480 127L502 163Q523 199 560 262T642 400Q801 668 805 676L817 683H1003Q1010 678 1010 672Q1010 650 997 637H979Q915 637 906 623Q903 618 834 340T764 57Q764 50 771 49T817 46H845Q851 38 851 37T848 19Q845 7 838 0H824Q789 2 701 2Q670 2 644 2T603 2T584 1Q569 1 569 11Q569 13 571 25Q576 42 581 45L586 46Q590 46 597 46T611 46Q646 47 657 50T674 62L813 616L634 313Q453 7 452 7Q446 0 428 0Q409 0 407 6Q405 10 379 304T351 604L285 348Q220 83 220 82Q220 65 233 57T279 46H295Q301 38 301 37T298 19Q295 7 288 0H275Q244 2 171 2Q145 2 123 2T88 2T72 1',
    0x4E: '633 637Q624 637 621 639T617 650Q617 670 630 683H641Q682 680 736 680Q836 680 845 683H853Q860 676 860 672Q858 647 848 637H832Q764 633 750 598Q746 590 673 300Q656 230 638 156T610 44L600 7Q598 0 576 0H559Q553 6 448 297L342 588Q341 588 279 336T216 81Q216 49 274 46Q293 46 295 40Q297 37 294 21Q293 19 292 16T291 11T290 7T289 4T287 2T284 1T280 1T275 0T263 0T229 1T167 2Q91 2 70 0H61Q54 7 54 11T57 27Q61 41 64 43T83 46Q146 50 164 84Q167 90 235 362L303 634Q300 635 253 637H220Q214 643 214 645T216 664Q220 677 226 683H314Q386 683 397 683T410 677Q412 675 501 428L591 179Q591 178 592 180T595 189T600 209T610 246T624 303T645 385Q698 595 698 606Q698 618 683 627T633 637',
    0x4F: '149 237Q149 326 186 413T282 563T412 665T552 704Q619 704 667 678T741 611T777 528T788 444Q788 328 728 219T572 44T377 -22Q275 -22 212 50T149 237ZM688 487Q688 570 650 617T548 665Q467 665 398 592T291 413T253 203Q253 119 290 70T387 20Q440 20 489 52T573 135T635 249T675 373T688 487',
    0x50: '62 0Q55 7 55 11Q55 27 62 41Q66 46 96 46Q132 47 143 50T160 62Q162 66 231 344T301 626Q301 627 300 629V631Q294 637 239 637H221Q215 642 215 645T217 664Q221 677 227 683H404H431H502Q578 683 615 675T684 636Q729 595 729 531Q729 462 671 396T524 308Q499 302 404 301H318L288 182Q258 63 258 55T310 46Q341 46 343 40Q345 37 342 21Q337 3 333 1Q330 0 321 0Q317 0 301 0T255 1T190 2Q97 2 72 0H62ZM626 555V562Q626 620 552 635Q546 636 481 637Q466 637 450 637T423 636T412 636Q401 635 398 627Q396 622 361 484Q353 452 344 416T330 362L325 344Q325 342 390 342H427Q523 342 567 386Q596 415 611 473T626 555',
    0x51: '460 -107Q460 -72 464 -42T468 -7L457 -10Q446 -14 424 -18T379 -22Q276 -22 213 50T149 237Q149 326 186 413T282 563T412 665T552 704Q664 704 726 631T788 442Q788 305 703 180Q627 64 517 13L506 8Q506 7 508 -12T513 -38T522 -59T538 -79T565 -85Q604 -85 634 -59T672 0Q676 11 684 11Q693 11 695 2Q695 -1 690 -20T673 -69T644 -126T599 -174T538 -194Q464 -194 460 -110Q460 -108 460 -107ZM689 481Q689 578 646 621T551 665Q468 665 391 586Q321 512 285 399T249 202Q249 106 295 58Q310 41 314 41Q315 41 315 46Q315 83 344 118T420 154Q450 154 473 135Q493 114 500 69L502 58L512 65Q571 110 613 192T672 348T689 481ZM472 49Q472 118 415 118Q393 118 373 98T353 51Q353 18 386 18H387Q424 18 472 40V49',
    0x52: '62 0Q55 7 55 11Q55 27 62 41Q66 46 96 46Q132 47 143 50T160 62Q162 66 231 344T301 626Q301 627 300 629V631Q294 637 239 637H221Q215 642 215 645T217 664Q221 677 227 683H386Q554 682 569 679Q571 678 580 676Q643 662 680 623T717 533Q717 473 667 420T528 337L538 330Q563 314 578 286T594 228Q594 212 588 147T581 65Q581 36 589 26T616 16H618Q637 16 652 37Q668 57 677 94Q679 105 701 105T723 95Q723 89 717 72T698 33T662 -5T610 -22Q555 -22 513 3T471 88Q471 107 486 168T502 244Q502 303 452 320Q445 322 382 323H320L288 192Q255 63 255 55T307 46Q338 46 340 40Q342 37 339 21Q335 3 330 1Q326 0 320 0Q317 0 306 0T265 1T190 2Q99 2 73 0H62ZM612 558Q612 566 612 568T610 581T603 597T590 611T567 625T532 635Q526 636 470 637Q458 637 445 637T422 636T412 636Q402 635 397 627L390 598Q383 570 373 532T354 455T337 389T330 361Q356 360 384 360H415Q483 360 527 382Q557 399 574 424T604 498Q612 533 612 558',
    0x53: '198 460Q198 551 269 628T432 705Q516 705 557 644L583 673Q589 679 593 684T600 693T605 698T609 702T611 704T614 705T618 705H620Q633 705 633 698T605 577T573 459L570 456H554Q546 456 543 456T536 457T532 460T531 466Q531 469 533 489T536 532Q536 573 525 600T496 640T462 657T427 662Q369 662 325 612T281 503Q281 475 290 458T318 430T356 415T407 401T463 383Q506 360 522 323T538 258V244Q538 141 465 60T300 -22Q198 -22 152 41L143 31Q137 25 126 12T106 -10T95 -21L92 -22Q88 -22 86 -22Q81 -22 78 -20T74 -16V-14Q74 -11 132 221Q134 227 155 227H171Q177 221 177 215Q177 212 175 205T171 182T169 147Q171 99 195 70T246 33T306 25Q358 25 400 70T453 169Q455 180 455 203V210Q455 263 414 285Q409 288 347 305Q271 328 254 339Q239 350 224 371Q198 409 198 460',
    0x54: '178 437Q173 442 171 446Q171 451 238 654Q243 670 250 677H681H762Q792 677 799 676T806 667Q806 661 788 553T768 444Q768 437 746 437Q727 437 723 445Q723 450 729 492T736 562Q736 589 728 602T693 624Q675 630 622 630H595Q575 630 571 629T564 623Q562 621 492 342T422 59Q422 48 502 46H542Q548 38 548 37T545 19Q541 6 535 0H517Q475 2 357 2Q315 2 279 2T223 2T198 1Q179 1 179 9Q179 14 182 24Q187 42 190 44Q194 46 206 46H232Q289 47 301 49T326 65L395 344Q465 619 465 626Q465 629 462 629Q456 631 411 631Q364 631 336 625T288 597T255 549T224 467Q215 442 210 437H178',
    0x55: '636 637Q627 637 624 639T620 650Q620 670 633 683H644Q702 681 753 681Q760 681 772 681T796 681T820 682T838 683H845H853Q860 676 860 672Q858 647 848 637H832Q764 633 750 598Q745 588 698 400T648 204Q627 140 584 86Q484 -22 378 -22Q300 -22 247 31T194 167Q194 176 194 182T196 198T200 218T207 248T217 288T231 346T250 422Q300 618 300 626Q300 627 300 629L299 631Q293 637 238 637H220Q214 642 214 645T216 664Q220 677 226 683H239Q307 681 372 681Q480 681 486 683H496Q502 677 502 674T500 656Q496 643 490 637H472Q418 637 406 630Q400 627 394 603T344 410Q299 232 292 198T284 135Q284 102 294 78T322 44T355 29T387 24Q455 24 515 74T604 211Q605 215 653 404T701 607Q701 618 686 627T636 637',
    0x56: '667 637Q657 637 654 639T650 650Q650 670 663 683H675Q704 681 772 681Q793 681 818 682T847 683Q868 683 868 672Q868 670 865 658T860 643Q857 637 848 637Q785 637 749 587L394 -15Q387 -22 366 -22Q346 -22 342 -16Q341 -13 313 303Q285 622 285 623Q283 631 273 634T229 637Q205 637 205 648Q205 654 208 666T217 682Q219 683 230 683Q276 680 329 680Q444 680 456 683H466Q472 677 472 674T470 656Q466 643 460 637H448Q384 637 384 615Q385 612 406 371T427 126Q427 125 495 240T632 473T704 596Q707 604 707 609Q707 633 667 637',
    0x57: '234 637H226Q205 637 205 648Q205 673 216 682Q218 683 231 683Q265 681 340 681Q371 681 404 682T443 683Q458 683 462 681T467 672Q467 670 464 658T459 643Q457 637 434 637Q407 636 394 632T378 623T376 613Q376 589 385 377T394 149L511 361Q542 419 596 519L613 551L612 585Q610 621 610 624Q608 637 559 637H555Q537 637 537 647Q537 654 540 664Q544 677 550 683H561Q600 680 656 680Q771 680 783 683H792Q798 677 798 675T796 658Q792 643 790 640T778 637H774Q721 637 708 620L717 385Q726 150 727 149Q727 148 752 193T812 303T882 433T942 546T969 596Q970 600 970 606Q970 610 969 613T966 620T961 625T955 628T949 631T941 633T934 634T927 636T920 637Q903 637 903 648Q903 650 905 664Q909 677 915 683H928Q960 681 1031 681Q1050 681 1073 681T1101 682Q1124 682 1124 672Q1124 655 1117 643Q1114 637 1104 637Q1085 637 1069 632T1043 618T1026 603T1014 588L1009 580L687 -16Q681 -22 660 -22Q643 -22 637 -16Q635 -14 627 223Q617 441 617 464L602 441Q578 397 487 228Q456 171 423 110T372 17T355 -15Q348 -22 328 -22Q312 -22 308 -20T303 -9Q303 -5 291 310T277 627Q273 636 234 637',
    0x58: '684 0Q670 0 634 1T569 2Q512 2 482 2T449 1Q433 1 433 10Q433 11 435 25Q437 34 438 37T442 43T448 45T459 46T476 49Q506 58 506 64Q506 65 467 179T426 295L382 244Q339 194 295 142T249 86Q245 79 245 72Q245 48 279 46Q293 46 293 32Q293 13 280 0H268Q206 2 151 2Q70 2 64 0Q50 0 50 11Q50 15 53 27Q57 41 60 43T78 46Q154 49 205 100Q207 103 312 225L411 341L407 353Q404 360 381 428T336 560T310 627Q301 636 255 637H229Q223 643 223 645T225 664Q229 677 235 683H246Q288 680 346 680Q462 680 477 683H487Q493 677 493 674T491 656Q488 644 485 641T471 637Q461 635 454 635Q419 626 421 619Q421 617 453 524T486 430T554 509T624 593Q631 604 631 611Q631 622 621 629T598 637Q583 637 583 648Q583 650 585 660Q589 676 591 679T602 683Q606 683 637 682T715 680Q742 680 771 681T804 682Q825 682 825 672Q825 650 817 642Q814 637 797 637Q739 634 700 608Q684 597 659 569T505 389L501 384L557 222Q612 61 616 57Q625 47 671 46Q691 46 697 45T704 36Q704 35 702 23Q701 19 700 14T699 7T696 3T692 1T684 0',
    0x59: '232 637Q198 637 198 647Q198 651 201 664T210 682Q212 683 223 683Q269 680 325 680Q443 680 455 683H465Q472 676 472 672Q472 656 465 642Q460 637 441 637Q395 634 395 623Q395 621 438 478T482 334T583 460T688 591Q688 593 694 601T700 617Q700 637 668 637H666Q655 637 655 648Q655 654 658 664Q660 672 660 673T663 678T668 682T677 683Q680 683 704 682T776 680Q801 680 828 681T858 682Q875 682 875 673Q875 669 872 657T867 643Q865 637 848 637Q788 634 749 597Q733 581 608 424L487 273L461 170Q454 145 448 118T438 76T434 60Q434 54 436 52T452 48T496 46H514Q520 41 520 38T518 19Q514 6 508 0H495Q427 2 364 2Q350 2 323 2T272 0H250H241Q234 7 234 11Q234 27 241 41Q245 46 275 46Q312 47 323 50T340 64Q340 65 344 79T355 120T368 171L393 274L341 448Q288 622 286 626Q278 636 232 637',
    0x5A: '203 452Q203 455 236 565T270 677Q270 681 274 681Q276 683 488 683H699Q704 678 704 675Q704 663 697 649Q697 647 449 348L201 50L266 49H301Q442 49 495 116Q525 155 556 251Q563 274 565 278T579 282H585Q609 285 609 271Q609 270 570 142T528 8T518 1T466 0H303Q253 0 197 0T131 -1Q112 -1 102 -1T87 1T81 3T80 8Q80 30 89 39Q90 41 204 178T446 470T575 626L584 637H512H504H475Q446 637 426 635T378 624T330 597T289 546T254 467Q247 446 243 444Q239 442 226 442Q203 442 203 452',
    0x61: '418 53Q418 26 438 26Q466 26 494 131Q500 151 504 152Q507 153 516 153H521Q531 153 534 153T540 150T543 144Q543 141 540 126T529 88T509 43T477 5T434 -11Q404 -11 383 3T354 30T347 48H346Q345 47 342 45T337 40Q282 -11 228 -11Q172 -11 137 34T101 146Q101 260 177 351T333 442Q343 442 352 441T369 437T382 431T393 425T402 417T409 410T414 402T419 396Q423 406 436 414T461 422Q475 422 484 413T494 395Q494 384 459 244T420 88Q418 80 418 58V53ZM397 323Q397 344 382 374T333 405Q302 405 271 372Q249 349 235 316T203 215Q184 135 184 108V100V94Q184 54 207 35Q218 26 235 26Q279 26 330 91Q343 109 346 118T372 217Q397 317 397 323',
    0x62: '158 683Q163 683 223 688T300 694Q312 694 312 685T279 544Q243 405 243 403L256 412Q268 422 292 432T338 442Q395 442 431 398T467 284Q467 175 393 82T229 -11Q175 -11 142 32T108 142Q108 176 115 207T166 412Q177 458 190 510T209 588T216 616Q216 629 209 632T170 637H149Q143 643 143 645T145 664Q150 683 158 683ZM178 109Q178 27 234 27Q247 27 254 29Q295 44 323 94Q343 129 363 208T384 332Q384 354 382 361Q369 405 332 405Q282 405 228 326L222 317L205 250Q178 142 178 109',
    0x63: '257 -10Q183 -10 143 37T103 155Q103 257 173 341T337 440Q341 441 348 441H358Q421 441 445 415T469 356Q469 320 450 305T410 289Q392 289 381 299T370 325Q370 362 404 378L414 383Q392 402 365 405Q322 405 285 375T227 294Q217 271 202 213T187 119Q187 27 263 27Q299 27 330 40Q361 51 386 71T424 106T440 121Q444 121 455 110T466 96Q466 92 458 81T432 54T390 24T331 0T257 -10',
    0x64: '418 54Q418 26 438 26Q466 26 494 131Q500 151 504 152Q507 153 516 153H521H526Q543 153 543 144Q543 143 541 129Q531 91 521 65T487 14T434 -11T383 3T354 30T347 48H346Q345 47 342 45T337 40Q282 -11 228 -11Q172 -11 137 34T101 146Q101 255 174 348T337 441Q354 441 368 437T390 427T404 414T413 404T417 400L471 616Q471 629 464 632T425 637H404Q398 643 398 645T400 664Q405 683 413 683Q418 683 478 688T555 694Q567 694 567 686Q567 676 495 389L419 86Q418 80 418 61V54ZM397 323Q397 329 394 340T385 367T365 394T333 405Q302 405 271 372Q249 349 235 316T203 215Q184 135 184 108V100Q184 71 191 56Q204 26 235 26Q267 26 300 57T344 112Q347 117 372 217T397 323',
    0x65: '107 166Q107 230 131 283T193 369T270 420T345 441Q346 441 352 441T361 442H364Q409 442 439 418T470 355Q470 270 366 239Q308 223 218 223H205Q189 164 189 125Q189 83 206 55T261 27Q309 27 353 50T426 109Q436 121 440 121T453 111T466 97Q469 92 455 77Q424 41 372 16T258 -10Q184 -10 146 41T107 166ZM416 333T416 354T401 390T360 405Q322 405 292 384T246 336T223 288T215 261Q215 260 240 260Q262 261 276 262T314 266T353 275T384 291T408 317',
    0x66: '351 608Q351 642 389 661Q368 668 365 668Q358 668 352 664Q349 663 347 661T342 654T337 647T333 637T330 627T327 614T324 601T321 587T318 571L291 432Q291 431 343 431H394Q400 426 400 423T398 404Q394 390 389 386L335 385H282L255 246Q212 20 189 -51Q136 -199 58 -204Q22 -204 0 -185T-23 -134Q-23 -100 -3 -85T37 -69Q54 -69 65 -80T76 -108Q76 -115 75 -119Q70 -134 61 -144T46 -158L39 -161Q39 -162 42 -163T50 -166T61 -168Q77 -168 91 -145Q98 -128 105 -95L125 -1Q145 90 146 98Q149 109 163 180T189 317T202 384T158 385H114Q108 390 108 393T110 412Q113 424 120 431H165Q211 431 211 433Q213 435 219 473T237 561T266 639Q282 667 310 686T367 705Q402 705 426 686T450 635Q450 600 430 585T390 569Q373 569 362 580T351 608',
    0x67: '103 163Q106 263 173 347T320 441Q322 441 329 441T341 442Q387 439 419 398Q420 399 420 400Q421 402 425 406T440 416T464 422Q476 421 485 413T494 396Q494 386 465 268T407 38T377 -77Q365 -123 310 -164T179 -205Q46 -205 46 -139Q46 -114 64 -97T106 -79Q127 -79 136 -91T146 -115Q146 -127 141 -138T130 -155T124 -162T125 -163Q133 -166 170 -168Q200 -168 217 -162Q242 -153 264 -130T297 -78Q298 -74 305 -46T320 10T327 38Q326 38 317 31T291 15T256 2Q249 1 231 1Q182 1 143 38T103 163ZM398 324Q398 330 395 346T375 383T332 405Q330 405 326 405T320 404Q291 396 263 365Q230 324 208 239T185 115Q185 38 238 38Q258 38 279 50T312 77T336 106L348 122Q349 125 373 223T398 324',
    0x68: '398 44Q398 26 414 26Q431 26 451 43Q477 71 496 136Q499 148 501 150T515 153H521Q531 153 534 153T541 150T544 143Q544 133 534 105T496 41T432 -8Q424 -10 408 -10Q370 -10 348 12T326 72Q326 93 342 135Q397 288 397 349Q397 367 396 372Q386 405 357 405Q283 405 228 310Q217 290 212 274T180 152Q153 42 148 26T135 3Q121 -11 102 -11Q89 -11 80 -3T69 19L216 616Q216 629 209 632T170 637H149Q143 643 143 645T145 664Q150 683 158 683Q163 683 223 688T300 694Q312 694 312 685Q312 674 277 539Q241 395 241 393Q242 394 249 399T259 407T271 415T285 424T300 431T318 437T338 440T362 442Q423 442 449 410T475 338Q475 290 437 178T398 44',
    0x69: '234 599Q234 620 251 638T292 656Q306 656 319 647T332 617Q332 594 313 577T273 560Q260 560 247 569T234 599ZM75 287Q75 292 82 313T103 362T142 413T196 441H214Q248 441 270 419T293 357Q292 338 289 330T245 208Q193 72 193 46Q193 26 209 26Q228 26 247 43Q273 71 292 136Q295 148 297 150T311 153H317Q327 153 330 153T337 150T340 143Q340 133 330 105T292 41T228 -8Q220 -10 204 -10Q160 -10 141 15T122 71Q122 98 171 227T221 384Q221 396 218 400T203 405Q175 403 156 374T128 312T116 279Q115 278 97 278H81Q75 284 75 287',
    0x6A: '266 600Q266 622 283 639T322 656Q340 656 352 645T364 616Q364 596 347 578T305 560Q291 560 279 569T266 600ZM75 287Q75 293 86 316T117 369T168 420T236 442Q282 442 304 415T327 358V332L278 134Q269 98 260 60T246 3T236 -36T227 -66T220 -85T213 -101T204 -114Q181 -150 139 -177T46 -204Q8 -204 -12 -186T-32 -140Q-32 -112 -14 -96T27 -79Q48 -79 57 -91T67 -114Q67 -146 38 -166Q42 -168 49 -168Q75 -168 98 -147T130 -108T146 -71Q150 -59 199 138T250 346Q253 359 253 373Q253 405 230 405Q206 405 184 386T149 345T126 301L117 280Q115 278 98 278H81Q75 284 75 287',
    0x6B: '158 683Q163 683 223 688T300 694Q312 694 312 686Q312 679 262 478L211 273Q212 272 219 276T248 299T296 349Q317 371 328 382T360 410T399 434T439 442Q462 442 480 427T498 373Q498 329 479 313T437 296Q420 296 409 305T398 331Q398 357 413 372T445 391Q454 392 448 399Q445 405 431 405Q408 405 377 385Q351 368 314 327T250 261Q243 257 243 254Q249 254 279 243T328 220Q366 192 366 146Q366 131 361 109T355 62V54Q355 26 376 26Q379 26 387 28Q420 36 443 130Q449 151 454 152Q457 153 465 153H470Q484 153 488 152T492 144Q492 141 489 126T476 88T454 42T420 5T372 -11Q331 -11 306 17T280 88Q280 100 283 119T287 146Q287 172 265 190T221 215T198 220Q197 220 173 121Q152 37 148 24T135 3Q121 -11 102 -11Q89 -11 80 -3T69 19L216 616Q216 629 209 632T170 637H149Q143 643 143 645T145 664Q150 683 158 683',
    0x6C: '162 61Q162 26 183 26Q211 26 239 131Q245 151 249 152Q252 153 261 153H266H271Q288 153 288 144Q288 143 286 129Q276 91 266 65T232 14T179 -11Q144 -11 116 12T87 81Q87 96 88 102L216 616Q216 629 209 632T170 637H149Q143 643 143 645T145 664Q150 683 158 683Q163 683 223 688T300 694Q312 694 312 686Q312 676 240 389L164 86Q162 74 162 61',
    0x6D: '81 278Q75 284 75 289Q77 299 89 338Q101 373 114 396T142 428T166 439T186 442H189Q225 440 251 417Q266 401 271 384L275 374L286 386Q342 442 414 442Q428 442 440 440T461 435T479 427T493 418T503 407T511 397T516 387T520 378T523 370L524 366Q546 395 583 418T667 442Q729 442 755 411T782 338Q782 290 743 178T704 45Q704 26 720 26Q773 26 802 136Q805 148 807 150T822 153H828Q838 153 841 153T848 150T851 143Q851 137 843 115T821 63T778 12T715 -10Q671 -10 652 16T632 71Q632 88 668 191T704 349Q704 367 703 372Q693 405 664 405Q637 405 613 393T571 360T547 329T534 309Q523 290 518 274T487 151Q455 24 452 16Q438 -11 408 -11T376 18Q376 26 411 167T447 314Q449 325 449 346Q449 372 444 384Q431 405 408 405Q334 405 276 305Q266 289 262 273T231 151Q199 24 196 16Q182 -11 152 -11T120 18Q120 26 159 182T200 347Q202 361 202 372Q202 405 181 405Q168 405 159 391Q145 374 132 328T117 280T98 278H81',
    0x6E: '449 44Q449 26 465 26Q482 26 502 43Q528 71 547 136Q550 148 552 150T566 153H572Q582 153 585 153T592 150T595 143Q595 133 585 105T547 41T483 -8Q475 -10 459 -10Q421 -10 399 12T377 72Q377 93 393 135Q448 288 448 349Q448 367 447 372Q437 405 408 405Q381 405 357 393T315 360T291 329T278 309Q267 290 262 274T231 151Q199 24 196 16Q182 -11 152 -11T120 18Q120 23 159 181Q199 343 199 346Q202 360 202 372Q202 406 183 406Q163 406 148 374Q142 360 135 338T124 299T117 280T98 278H81Q75 284 75 287Q76 293 78 303T90 341T110 388T141 425T184 442Q195 442 204 441T221 436T235 429T247 421T256 412T262 403T267 394T271 387T273 381L274 378V374L287 387Q342 442 414 442Q474 442 500 410T526 338Q526 290 488 178T449 44',
    0x6F: '103 155Q103 266 185 354T366 442Q435 442 476 394T517 275Q517 169 436 79T255 -11Q194 -11 149 32T103 155ZM187 119Q187 67 209 47T260 26Q290 26 321 47Q354 68 380 113T426 260Q432 291 432 315Q432 361 408 385Q388 405 358 405Q319 405 283 374T227 294Q217 271 202 213T187 119',
    0x70: '81 278Q75 284 75 287Q93 379 131 417Q154 442 189 442Q222 440 243 423T272 382L280 390Q335 442 389 442Q446 442 482 398T518 284Q518 212 480 137T375 19Q321 -10 291 -10H282H278Q237 -10 204 28L202 32L181 -51Q160 -135 160 -139Q160 -147 205 -148H230Q236 -155 236 -157T233 -175Q230 -187 227 -190T214 -194Q211 -194 202 -194T169 -193T108 -192Q40 -192 21 -194H13Q6 -187 6 -183T9 -167Q13 -153 16 -151T39 -148Q73 -147 78 -136Q82 -128 139 104Q199 337 199 347Q202 362 202 372Q202 406 182 406Q169 406 159 391Q145 374 132 328T117 280T98 278H81ZM221 111Q234 26 286 26Q307 26 336 47T385 116Q398 147 416 217T435 332Q435 354 433 361Q420 405 383 405Q333 405 279 326L273 317L221 111',
    0x71: '228 -11Q172 -11 137 33T101 147Q101 205 125 266T201 377T318 441Q322 442 333 442Q388 442 420 394L429 403Q439 413 455 423T481 437T494 442Q498 442 501 439T504 434Q504 425 435 149Q364 -135 364 -139Q364 -147 409 -148H434Q440 -155 440 -157T437 -175Q433 -191 429 -193Q425 -194 418 -194Q416 -194 406 -194T372 -193T309 -192Q259 -192 233 -192T204 -193Q190 -193 190 -184Q190 -181 192 -169Q196 -153 199 -151T219 -148Q266 -148 277 -141Q283 -137 305 -51L325 29L316 22Q270 -11 228 -11ZM397 323Q397 329 394 340T385 367T365 394T333 405Q302 405 271 372Q249 349 235 316T203 215Q184 135 184 108V100Q184 71 191 56Q204 26 235 26Q267 26 300 57T344 112Q347 117 372 217T397 323',
    0x72: '81 278Q75 284 75 289Q77 301 89 339Q122 442 183 442Q219 442 241 425T271 384L283 396Q327 442 384 442Q424 442 454 421T484 362Q484 327 464 312T424 296Q407 296 396 305T385 331Q385 352 394 365T414 384T424 390Q409 405 378 405Q322 405 276 315L268 300L234 161Q200 25 196 16Q182 -11 152 -11T120 18Q120 23 159 181Q199 343 199 346Q202 360 202 372Q202 405 182 405Q164 405 150 377T128 316T117 280Q115 278 98 278H81',
    0x73: '153 285Q153 349 197 395T311 442Q355 442 386 420T418 356Q418 321 401 308T365 294Q336 294 331 326Q331 336 334 345T343 359T353 368T362 374L366 376Q365 379 362 383T344 396T308 404Q265 404 246 377T226 325T244 289T287 275T339 258T383 212Q395 188 395 163Q395 132 379 95T333 32Q279 -11 207 -11Q154 -11 115 13T76 86Q76 108 83 123T102 145T121 153T135 156Q154 156 164 145T175 117Q175 82 142 66L132 62Q131 62 131 61Q131 57 139 49T166 34T210 26Q250 26 277 44T312 83T321 123Q321 153 301 166T248 185T204 198Q176 211 162 241Q153 258 153 285',
    0x74: '94 385Q87 392 87 395Q87 399 90 411T95 425Q97 430 103 430T149 431H196L215 511Q218 521 222 539T228 565T234 585T242 603T251 615T264 623T281 626Q311 626 315 597Q315 591 296 513T275 433Q275 431 320 431H366Q373 424 373 420Q373 398 360 385H263L189 86Q188 80 188 61V54Q188 29 201 27Q213 23 229 30Q253 37 276 66T316 138Q321 149 324 151T342 153H347Q364 153 364 146T360 130Q331 63 290 26T202 -11Q158 -11 135 18T111 81Q111 93 129 168T166 314L184 383Q184 385 139 385H94',
    0x75: '75 287Q75 299 89 333T135 404T205 441Q246 441 269 420T293 357Q292 338 259 245T225 95Q225 26 274 26Q301 26 324 43T358 77T369 99Q369 102 406 249T446 404Q460 431 490 431T522 402Q522 394 485 245T446 89Q443 74 443 56Q443 28 461 26Q487 26 507 86Q524 130 524 146Q524 147 530 153H547Q570 153 570 144Q570 138 561 109T544 62Q530 29 512 12Q492 -11 454 -11Q429 -9 410 2T385 23T376 41L363 28Q350 16 325 3T269 -10Q204 -10 176 25T148 108Q148 161 184 262T221 383Q221 405 206 405Q178 405 158 375T128 313T116 279Q115 278 97 278H81Q75 284 75 287',
    0x76: '387 386Q387 407 406 425T445 443Q466 443 479 423T492 371Q492 330 473 253Q411 18 307 -8Q298 -10 279 -10Q208 -10 179 26T149 114Q149 162 185 261T221 384Q221 405 206 405Q177 405 157 375T128 313T116 279Q115 278 97 278H81Q75 284 75 287T79 304T93 342T119 388T158 425T210 441H218Q243 441 268 421T293 357Q292 337 259 245T226 102Q226 26 285 26Q328 26 360 72T422 237Q429 265 429 290Q428 324 408 349T387 386',
    0x77: '591 386Q591 407 610 425T649 443Q670 443 683 423T696 371Q696 327 672 232T621 85Q575 -11 493 -11Q469 -11 449 -6T418 8T398 24T386 38L382 43Q347 -10 293 -10H286Q221 -10 186 21T150 115Q150 164 185 262T221 384Q221 405 206 405Q177 405 157 375T128 313T116 279Q115 278 97 278H81Q75 284 75 287T79 304T93 342T119 388T158 425T210 441H218Q243 441 268 421T293 357Q292 336 260 246T227 108Q227 26 292 26H295Q332 26 361 93L366 103V119Q366 122 367 133T369 150Q372 167 401 282T433 404Q446 431 477 431Q507 431 509 402Q509 396 500 358T474 254T446 140Q444 126 444 104V92Q444 66 459 46T502 26H505Q527 28 545 43T577 88T602 149T623 226Q633 265 633 290Q632 324 612 349T591 386',
    0x78: '275 356Q275 383 262 394T233 405Q196 405 166 371T121 289Q119 280 116 279T98 278H81Q77 282 76 283T75 288T78 300Q88 332 109 363T153 411Q195 442 235 442Q306 442 333 386Q373 442 427 442Q461 442 487 421T513 364T494 312T453 296Q436 296 425 305T414 331Q414 352 424 366T446 386L456 390Q448 404 421 404H418Q382 404 358 341Q355 332 328 227T298 105Q295 90 295 75Q295 26 339 26Q365 26 388 43T424 82T444 123T451 146L457 153H474Q490 153 493 152T496 144Q496 133 486 110T456 58T404 10T333 -11Q276 -11 237 45Q197 -11 146 -11Q108 -11 83 10T58 67Q58 99 76 117T119 135Q136 135 147 124T158 96Q158 89 157 85Q149 57 125 45L115 41Q125 26 151 26Q171 26 187 45T214 93Q217 102 244 210T273 330Q275 339 275 356',
    0x79: '75 287Q75 299 89 333T135 404T205 441Q246 441 269 420T293 357Q292 338 259 245T225 95Q225 26 274 26Q325 26 367 93L405 245Q442 393 446 404Q460 431 490 431T522 402Q522 400 416 -24Q389 -102 327 -153T196 -205Q152 -205 122 -181T91 -119Q91 -84 110 -67T152 -49Q170 -49 180 -60T191 -87Q191 -108 174 -128Q167 -134 157 -138T146 -144Q155 -153 159 -156T173 -163T199 -167Q229 -167 255 -149T297 -105T325 -52T342 -6T347 15Q315 -10 269 -10Q204 -10 176 25T148 108Q148 161 184 262T221 383Q221 405 206 405Q178 405 158 375T128 313T116 279Q115 278 97 278H81Q75 284 75 287',
    0x7A: '160 317Q158 317 155 317Q136 317 136 324Q136 351 171 396T260 442Q292 442 321 410T365 375H369Q384 375 404 408L425 441Q427 442 444 442H460Q466 436 466 434Q466 419 426 367Q387 314 294 222T178 105L170 95L181 94Q198 93 236 81T295 68Q328 68 356 89T395 141Q398 150 401 151T419 153Q441 153 441 144Q441 110 394 50T282 -11Q251 -11 221 23T171 57Q157 57 143 47T121 26T104 3T95 -10Q93 -11 76 -11H60Q54 -5 54 -2Q54 3 61 14Q103 88 233 215Q349 329 349 338L302 351Q269 362 247 362Q227 362 212 356T192 342T183 327T178 320Q175 317 160 317',
}, {});
//# sourceMappingURL=tex-mathit.js.map