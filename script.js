// Champions League story. 1st prompt. 
var answer = window.prompt ("It is the round of 16th. The manager is thinking about playing in Milan. Pick Milan")

// Conditional statement for round of 16th. 1st statement, Milan.
if (answer === "Milan") {
  console.log("User will be playing Napoli")
  let secondanswer = window.prompt("Based on the city you pick you are playing Napoli. They just won the scudetto (Serie A Title. It is supposed to be a hard game. So you make the team train one extra day. Due to your preparation your team dominated the game and beat Napoli 3-0. Goalscorer: Fofana 24', Aubameyang 56', and James 61'. Pick the next city you want to play the quarter final in Zagreb or Salzburg")
  
// Short story for quarter-final. If User pick Zagreb
  if (secondanswer === "Zagreb") {
    console.log("User will be playing FC Kobenhavn")
    let thirdanswer = window.prompt("This game is a very important game. If you win this game you automatically advance to the playoff. The team is focus and the forwards are scoring bangers in training the day before the game. But when the game starts Chelsea get scored on in the 7'. You start shouting instructions to the players trying to organize the game. On the 10th minute, the team start playing good and manage to score 2 goals in 20 minutes. Final score Chelsea 2 - FC Kobenhavn 1. Pick the next city you want to play the semi finals in Dortmund or Liverpool.")
    
// Short story for semis. If User pcik Dortmund 
    if (thirdanswer === "Dortmund") {
      console.log("User will be playing Bayern Munchen")
      let fourthanswer = window.prompt("You make preparation to face Dortmund. zThey are in a winning streak. 11 games no losses. So you make the team train a little more than usual. Also, you make sure that every players watch film. When the game begin, Dortmund dominate the 1st half managing to score a goal during a counter attack. During halftime, you give the team the speech of your life motivating to leave it all on the field. On the half, every players ball out coming ack to win the game 2-1. Goalscorer Sterling 63' and Havertz 83'. Pick your next city you want to play the final in London or Moscow. ")
      
// Short story for final. If User pick London 
      if (fourthanswer === "London") {
        console.log("User will be be playing Real Madrid")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at Real players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
        
// Short story for final. If User pick Moscow 
      else if (fourthanswer === "Moscow") {
        console.log("User will be be playing Barcelona FC")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at Barca players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
    }
      
// Short story for semis. If user pick Liverpool 
    else if (thirdanswer === "Liverpool") {
      console.log("User will be playing Liverpool")
      let fourthanswer = window.prompt("Liverpool FC went to the League final last season but they are struggling this season. You still hae to make sure to prepare the squad accordingly because it is hard to beat Liverpool at home (maybe that's why they pick their own city). When the game begin, Liverpool manage to score 2 goals in the 1st 15'. You remind the team it is a 90 min games there is no need to panic even when the odds is not in ouur favor. Eventually, the players start turning the tide on the 20th with a goal followed by 5. Final score 2-6. Goalscorer Joao Felix 40' 55' 80', Haertz 70' 90', Fofana 63'. Pick the city you want to play the final in Barcelona or Madrid")
      
// Short story for final. If User pick Barcelona 
       if (fourthanswer === "Barcelona") {
        console.log("User will be be playing Inter Milan")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at Inter players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
         
// Short story for final. If User pick Madrid 
       else if (fourthanswer === "Madrid") {
        console.log("User will be be playing Frankurt")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at Frankurt players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
    }
  }
    
// Short story for quarter final. If user pick Salzburg
  else if (secondanswer === "Salzburg") {
  console.log("User will be playing Salzburg")
  let thirdanswer = window.prompt("Based on the city you pick you will be playing Salzburg. Ironically, Salzburg pick their own city. They are not the best team but they are well respected in Austria. Training proceed s usual. When the game begin, Kovacic scores a banger on the 23rd but the opponent doesn't give up ad respond on the 48th minute. The gae is neck and neck but Havertz find the net on the 64th to win us the game. Pick the next city you want to play the semi final in Paris or Vienna.")
    
// Short story for semis. If user pick Paris
    if (thirdanswer === "Paris") {
      console.log("User will be playing Benfica")
      let fourthanswer = window.prompt("Benfica is a good team in Portugal but you know you can beat this because we are one of the best in the world. When the game begin we control possesion for the 1st half but didn't manage to score. During halftime, you remind the team of our past achievement as a reason why we should be able to move on into the next round. The team inspired by your drop a masterclass on the second half scoring 4 goals. Final score 4-0. Sterling 60' 75', Joao 80' 83'. Pick the next city you want to play the final in Lisbon or Monaco")
      
// Short story for final. If user pick Lisbon
      if (fourthanswer === "Lisbon") {
        console.log("User will be be playing Ajax")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at Ajax players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
        
// Short story for final. If user pick Monaco
       else if (fourthanswer === "Monaco") {
        console.log("User will be be playing RB Leipzig")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at RB players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
    }
      
// Short story for semis. If user pick Vienna 
   else if (thirdanswer === "Vienna") {
      console.log("User will be playing PSG")
      let fourthanswer = window.prompt("PSG is the best team in France. They also have to best player in the world. You, the manager know you can beat this team because their midfield and defense is not as solid as their offense. With proper preparation the defense should be able to contain Mbappe because we have some world class defenders. When the game begins, Mbappe carry the ball from the 50 yard line and score a banger shocking the whole world. After the goal, we got dominated for 44 minutes until the 45th. A counter attack started by Enzo find Murdryk in the box who net his first goal for the club. The goal motivated the players and on the second half, they plays their hearts out. No teams could break the tie so the game went to a penalty shootout. It is intense. Nobody misses. Until the 5th penalty. Messi hits the post. It's Murdryk turn. A goal win us the game. Bang Murdryk scores. Goodbye PSG. Pick the next city you want to play in. Pick the next city you want to play the final in Napoli or Nice.")
     
// Short story for final. If user pick Napoli 
     if (fourthanswer === "Napoli") {
        console.log("User will be be playing Atletico Madrid")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at Atletico players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
       
// Short story for final. If user pick Nice 
     else if (fourthanswer === "Nice") {
        console.log("User will be be playing Manchester City")
        let fifthanswer = window.prompt("This is the final, you neer expected to make it this far in your 1st season. One last win, you become champion of Europe. Before the game, trainigg proceed as usual, there is no additional preparation because it is up to the players now to finish the job. On game day, the changing room is a quiet as it never was. Everybody is focus. They are waiting for the bell to ring for kickoff. At 2:50 pm, the bell rings. The players enter the field looking at City players. The game begin, it is intense. Tackles are flying in. By the 20th minutes, 3 yellow cards have been handed out and possession is tight. The 1st half finish 0-0. When the second half starts, the same story repeats itself until the 85th minute. Joao pick up the ball from the 50 yards. He carries to the top the 18 andd cross it in for Havertz. Havertz volleys it and score a sensational goal. The fans are losing it thinking the game is won but the team remain focus because they know the game is not over. Of course the last few minutes become the longest of our lives but at last the whistle is blown. Chelsea becomes Champion of Europe. Enter your feedback about the game format below.")
        console.log(fifthanswer)
      }
    } 
}
}
