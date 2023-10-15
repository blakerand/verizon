import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Lottie from 'lottie-react';


function DataCard() {
  return (
    <Card className="bg-black bg-opacity-100 rounded-lg w-full h-full p-4 flex min-h-[550px] flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
      <CardTitle className="mb-1 absolute top-10 text-white mx-10 text-center">
        You've used 14 gigabytes of data this month.
      </CardTitle>
      <div className="text-gray-300 absolute top-[90px] flex-col text-sm px-10 text-center">
        You can upgrade to an Unlimited plan for $10 more per month.
      </div>
      <Lottie animationData={{"v": "5.1.8", "fr": 15.0, "ip": 120, "op": 150, "w": 512, "h": 512, "nm": "4.Final", "ddd": 0, "assets": [{"id": "comp_0", "layers": [{"ddd": 0, "ind": 1, "ty": 0, "nm": "2.Combine", "cl": "Combine", "refId": "comp_1", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "hasMask": true, "masksProperties": [{"inv": false, "mode": "s", "pt": {"a": 0, "k": {"i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[256, 1024], [512, 512], [768, 1024]], "c": true}, "ix": 1}, "o": {"a": 0, "k": 100, "ix": 3}, "x": {"a": 0, "k": 0, "ix": 4}, "nm": "Mask 1"}], "w": 1024, "h": 1024, "ip": 0, "op": 300, "st": 0, "bm": 0}]}, {"id": "comp_1", "layers": [{"ddd": 0, "ind": 1, "ty": 0, "nm": "1.Signal", "cl": "Signal", "refId": "comp_2", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "w": 1024, "h": 1024, "ip": 120, "op": 420, "st": 120, "bm": 0}, {"ddd": 0, "ind": 2, "ty": 0, "nm": "1.Signal", "cl": "Signal", "refId": "comp_2", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "w": 1024, "h": 1024, "ip": 90, "op": 390, "st": 90, "bm": 0}, {"ddd": 0, "ind": 3, "ty": 0, "nm": "1.Signal", "cl": "Signal", "refId": "comp_2", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "w": 1024, "h": 1024, "ip": 60, "op": 360, "st": 60, "bm": 0}, {"ddd": 0, "ind": 4, "ty": 0, "nm": "1.Signal", "cl": "Signal", "refId": "comp_2", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "w": 1024, "h": 1024, "ip": 30, "op": 330, "st": 30, "bm": 0}, {"ddd": 0, "ind": 5, "ty": 0, "nm": "1.Signal", "cl": "Signal", "refId": "comp_2", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "w": 1024, "h": 1024, "ip": 0, "op": 300, "st": 0, "bm": 0}]}, {"id": "comp_2", "layers": [{"ddd": 0, "ind": 1, "ty": 4, "nm": "Signal Wave", "sr": 1, "ks": {"o": {"a": 1, "k": [{"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.333], "y": [0]}, "n": ["0p833_0p833_0p333_0"], "t": 60, "s": [100], "e": [0]}, {"t": 120}], "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [512, 512, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100, 100], "ix": 6}}, "ao": 0, "shapes": [{"ty": "gr", "it": [{"d": 1, "ty": "el", "s": {"a": 1, "k": [{"i": {"x": [0.833, 0.833], "y": [0.833, 0.833]}, "o": {"x": [0.167, 0.167], "y": [0.167, 0.167]}, "n": ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"], "t": 0, "s": [0, 0], "e": [984, 984]}, {"t": 120}], "ix": 2}, "p": {"a": 0, "k": [0, 0], "ix": 3}, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false}, {"ty": "st", "c": {"a": 0, "k": [1, 1, 1, 1], "ix": 3}, "o": {"a": 0, "k": 100, "ix": 4}, "w": {"a": 0, "k": 40, "ix": 5}, "lc": 1, "lj": 1, "ml": 4, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false}, {"ty": "tr", "p": {"a": 0, "k": [0, 0], "ix": 2}, "a": {"a": 0, "k": [0, 0], "ix": 1}, "s": {"a": 0, "k": [100, 100], "ix": 3}, "r": {"a": 0, "k": 0, "ix": 6}, "o": {"a": 0, "k": 100, "ix": 7}, "sk": {"a": 0, "k": 0, "ix": 4}, "sa": {"a": 0, "k": 0, "ix": 5}, "nm": "Transform"}], "nm": "Ellipse 1", "np": 3, "cix": 2, "ix": 1, "mn": "ADBE Vector Group", "hd": false}], "ip": 0, "op": 300, "st": 0, "bm": 0}]}], "layers": [{"ddd": 0, "ind": 1, "ty": 0, "nm": "3.Mask", "cl": "Mask", "refId": "comp_0", "sr": 1, "ks": {"o": {"a": 0, "k": 100, "ix": 11}, "r": {"a": 0, "k": 0, "ix": 10}, "p": {"a": 0, "k": [256, 256, 0], "ix": 2}, "a": {"a": 0, "k": [512, 512, 0], "ix": 1}, "s": {"a": 0, "k": [50, 50, 100], "ix": 6}}, "ao": 0, "w": 1024, "h": 1024, "ip": 0, "op": 300, "st": 0, "bm": 0}], "markers": []}} className='h-[300px]' />
      <Button className="w-3/4 bg-red-700 mt-4 absolute bottom-10">Upgrade</Button>
    </Card>
  );
}

export default DataCard;
