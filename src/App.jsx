import { useEffect, useState } from "react";
import html2canvas from "html2canvas";

const SIGNS = [
"会慢慢变好的\n不用太急",
"今天可以不那么用力",
"刚好来得及\n你没有晚",
"这件事会过去\n但你会留下",
"会有一点好运\n但不会很张扬",
"允许自己松一点",
"你不用一直正确",
"今天适合随便一点",
"有些答案会自己出现",
"你已经在路上了",

"会被温柔对待\n只是稍微晚一点",
"不是所有努力都要有回应",
"你可以不证明什么",
"今天偏向你一点",
"慢一点也没关系",
"事情在悄悄变好",
"你不需要那么懂事",
"会有人懂你\n只是还没出现",
"今天可以不完美",
"你已经很好了\n只是你不知道",

"有些事情不必解释",
"世界没有你想的那么严格",
"你可以重新来过",
"今天适合放过自己",
"不是所有失去都是坏事",
"你可以不被定义",
"会有新的开始",
"你值得被认真对待",
"别太早下结论",
"事情还没结束",

"今天适合发呆",
"会有一点小惊喜",
"你不用一直坚强",
"慢慢来\n别着急",
"会有新的可能",
"你可以停一下",
"今天可以轻一点",
"不需要答案也没关系",
"会过去的\n真的",
"你没有错",

"会有人站在你这边",
"你可以拒绝",
"今天适合什么都不做",
"你不需要讨好任何人",
"会有转机\n只是还没到",
"别急着否定自己",
"你可以再试一次",
"事情没你想的那么糟",
"你可以不解释",
"慢一点更稳",

"今天会温柔一点",
"你值得被偏爱",
"会有一点好事发生",
"你已经尽力了",
"不完美也很好",
"今天适合安静",
"你可以依靠别人",
"会有答案的",
"你可以不那么独立",
"别太苛刻",

"事情在变轻",
"你可以放松一点",
"会慢慢对齐的",
"今天适合走走停停",
"你可以不着急成长",
"会有新的方向",
"你正在变好",
"你值得等待",
"别太快否定自己",
"今天刚刚好",

"你可以慢下来",
"会有一点偏向你",
"今天不需要证明",
"你可以重新开始",
"会有新的关系出现",
"你不需要完美",
"事情会对齐",
"你可以相信自己一点",
"今天适合做自己",
"会有变化",

"你不用那么清醒",
"会有人理解你",
"今天可以随意一点",
"你可以不回应",
"会有新的机会",
"你已经在改变了",
"别太紧绷",
"今天适合呼吸",
"你可以慢慢来",
"会好的",

"不一定准\n但这句话刚好给你",
"今天偏向温柔",
"你可以再等等",
"事情在靠近你",
"会有回应\n只是晚一点",
"你可以不那么努力",
"今天允许你放过自己",
"你没有想象中那么糟",
"会有答案\n只是还没出现",
"刚好是现在"
];

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

export default function App() {
  const [sign, setSign] = useState("");

  useEffect(() => {
    const key = getTodayKey();
    const saved = localStorage.getItem(key);

    if (saved) {
      setSign(saved);
    } else {
      const result =
        SIGNS[Math.floor(Math.random() * SIGNS.length)];
      localStorage.setItem(key, result);
      setSign(result);
    }
  }, []);

  const share = async () => {
    const el = document.getElementById("card");
    const canvas = await html2canvas(el);

    const link = document.createElement("a");
    link.download = "gua.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="container">

      <div id="card" className="card">

        <p className="brand">挂一卦</p>

        <p className="sign">
          {sign.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <p className="tip">不一定准，但会刚好</p>

      </div>

      <button onClick={share} className="share">
        保存这一卦
      </button>

    </div>
  );
}