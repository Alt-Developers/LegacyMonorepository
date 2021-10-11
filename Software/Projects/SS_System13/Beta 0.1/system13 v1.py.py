import time

print("Welcome to SS x VR Technological Department")
print("-------------------------------------------")
print("System13 fairness program")
print("")
def checkplayer() :
  playerinput = str(input("Player Here: "))
  print("Loading...")
    #Tier4
  if playerinput == ("teelek") :
    playerinput = int(4)
  if playerinput == ("levi") :
    playerinput = int(4)
  if playerinput == ("kin") :
    playerinput = int(4)
  if playerinput == ("techin") :
    playerinput = int(4)
    #Tier3
  if playerinput == ("ryu") :
    playerinput = int(3)
  if playerinput == ("ran") :
    playerinput = int(3)
  if playerinput == ("vor") :
    playerinput = int(3)
  if playerinput == ("porsche") :
    playerinput = int(3)
  if playerinput == ("hero") :
    playerinput = int(3)
  if playerinput == ("nutboy") :
    playerinput = int(3)
  if playerinput == ("nile") :
    playerinput = int(3)
  if playerinput == ("saika") :
    playerinput = int(3)
    #Tier2
  if playerinput == ("panpan") :
    playerinput = int(2)
  if playerinput == ("sen") :
    playerinput = int(2)
  if playerinput == ("nut") :
    playerinput = int(2)
  if playerinput == ("zach") :
    playerinput = int(2)
  if playerinput == ("shimon") :
    playerinput = int(2)
    #Tier1    
  if playerinput == ("neo") :
    playerinput = int(1)
  if playerinput == ("berry") :
    playerinput = int(1)
  print("Success!")
  print("----")
  return(playerinput)

"""
Tier to Integer
4 = Tier S
3 = Tier A
2 = Tier B
1 = Tier C
"""
#Input Process
while True :

  print("Currently Calulating Defenders' points")
  print("")

  cs = 0
  print("Player Number 1 Defenders")
  p1d = checkplayer()
  cs += p1d
  print("Current Score ", cs)
  print("Player Number 2 Defenders")
  p2d = checkplayer()
  cs += p2d
  print("Current Score ", cs)
  print("Player Number 3 Defenders")
  p3d = checkplayer()
  cs += p3d
  print("Current Score ", cs)
  print("Player Number 4 Defenders")
  p4d = checkplayer()
  cs += p4d
  print("Current Score ", cs)
  print("Player Number 5 Defenders")
  p5d = checkplayer()
  cs += p5d
  print("Current Score ", cs)

  dscore = cs
  print("Deffenders Currently have" , dscore, "points")
  
  print("")
  print("")

  print("Currently Calulating Attackers' points")
  print("")

  csa = 0
  print("Player Number 1 Attackers")
  p1a = checkplayer()
  csa += p1a
  print("Current Score ", csa)
  print("Player Number 2 Attackers")
  p2a = checkplayer()
  csa += p2a
  print("Current Score ", csa)
  print("Player Number 3 Attakers")
  p3a = checkplayer()
  csa += p3a
  print("Current Score ", csa)
  print("Player Number 4 Attackers")
  p4a = checkplayer()
  csa += p4a
  print("Current Score ", csa)
  print("Player Number 5 Attackers")
  p5a = checkplayer()
  csa += p5a
  print("Current Score ", csa)

  print("-----------------")

  ascore = csa
  print("Attackers Currently have" , ascore, "points")
  print("")

  scoredif = 0
  if ascore < dscore :
    scoredif = dscore - ascore
  else :
    scoredif = ascore - dscore

  # Annouce and Find Result
  print("Result :")
  if ascore == dscore :
    print ("Fair! With the Score of ", ascore, " each!")
  else :
    if ascore != dscore :
      print("Unfair! Defenders' have ", scoredif, " more point(s).")
    else :
      scoredif = ascore - dscore
      print("Unfair! Attackers' have ", scoredif, " more point(s).")
  
  print("")

  # End program
  if scoredif > 0 :
    i = 0
    print("team is not fair the system will auto restart")
    for i in range(0,3):
      print(i)
      time.sleep(2)
    continue
  else :
    break

