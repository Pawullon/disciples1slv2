export const isBranchBuilt = (buildIndex, builds) => {
    if (buildIndex === "g000bb0001") return builds[0].isBuilt || builds[1].isBuilt || builds[9].isBuilt || builds[10].isBuilt
    if (buildIndex === "g000bb0002") return builds[1].isBuilt || builds[9].isBuilt || builds[10].isBuilt
    if (buildIndex === "g000bb0003") return builds[2].isBuilt || builds[3].isBuilt
    if (buildIndex === "g000bb0004") return builds[3].isBuilt    
    if (buildIndex === "g000bb0005") return builds[4].isBuilt
    if (buildIndex === "g000bb0006") return builds[5].isBuilt || builds[6].isBuilt || builds[13].isBuilt
    if (buildIndex === "g000bb0007") return builds[6].isBuilt
    if (buildIndex === "g000bb0008") return builds[7].isBuilt
    if (buildIndex === "g000bb0009") return builds[7].isBuilt || builds[8].isBuilt
    if (buildIndex === "g000bb0010") return builds[9].isBuilt
    if (buildIndex === "g000bb0011") return builds[10].isBuilt
    if (buildIndex === "g000bb0012") return builds[11].isBuilt || builds[12].isBuilt
    if (buildIndex === "g000bb0013") return builds[12].isBuilt
    if (buildIndex === "g000bb0014") return builds[13].isBuilt
    if (buildIndex === "g000bb0015") return builds[14].isBuilt
    if (buildIndex === "g000bb0016") return builds[15].isBuilt
    if (buildIndex === "g000bb0017") return builds[16].isBuilt

    if (buildIndex === "g000bb0018") return builds[17].isBuilt || builds[18].isBuilt
    if (buildIndex === "g000bb0019") return builds[18].isBuilt
    if (buildIndex === "g000bb0020") return builds[19].isBuilt || builds[20].isBuilt || builds[21].isBuilt
    if (buildIndex === "g000bb0021") return builds[20].isBuilt
    if (buildIndex === "g000bb0022") return builds[21].isBuilt
    if (buildIndex === "g000bb0023") return builds[22].isBuilt || builds[23].isBuilt || builds[29].isBuilt || builds[30].isBuilt
    if (buildIndex === "g000bb0024") return builds[23].isBuilt
    if (buildIndex === "g000bb0025") return builds[24].isBuilt || builds[25].isBuilt || builds[26].isBuilt || builds[27].isBuilt || builds[28].isBuilt
    if (buildIndex === "g000bb0026") return builds[25].isBuilt || builds[26].isBuilt || builds[27].isBuilt
    if (buildIndex === "g000bb0027") return builds[26].isBuilt
    if (buildIndex === "g000bb0028") return builds[27].isBuilt
    if (buildIndex === "g000bb0029") return builds[28].isBuilt
    if (buildIndex === "g000bb0030") return builds[29].isBuilt || builds[30].isBuilt
    if (buildIndex === "g000bb0031") return builds[30].isBuilt
    if (buildIndex === "g000bb0032") return builds[31].isBuilt
    if (buildIndex === "g000bb0033") return builds[32].isBuilt
    if (buildIndex === "g000bb0034") return builds[33].isBuilt

    if (buildIndex === "g000bb0035") return builds[34].isBuilt || builds[35].isBuilt || builds[47].isBuilt
    if (buildIndex === "g000bb0036") return builds[35].isBuilt
    if (buildIndex === "g000bb0037") return builds[36].isBuilt
    if (buildIndex === "g000bb0038") return builds[37].isBuilt || builds[38].isBuilt || builds[39].isBuilt || builds[40].isBuilt
    if (buildIndex === "g000bb0039") return builds[38].isBuilt || builds[39].isBuilt || builds[40].isBuilt
    if (buildIndex === "g000bb0040") return builds[39].isBuilt
    if (buildIndex === "g000bb0041") return builds[40].isBuilt
    if (buildIndex === "g000bb0042") return builds[41].isBuilt || builds[42].isBuilt || builds[43].isBuilt || builds[44].isBuilt
    if (buildIndex === "g000bb0043") return builds[42].isBuilt || builds[43].isBuilt || builds[44].isBuilt
    if (buildIndex === "g000bb0044") return builds[43].isBuilt
    if (buildIndex === "g000bb0045") return builds[44].isBuilt
    if (buildIndex === "g000bb0046") return builds[45].isBuilt || builds[46].isBuilt
    if (buildIndex === "g000bb0047") return builds[46].isBuilt
    if (buildIndex === "g000bb0048") return builds[47].isBuilt
    if (buildIndex === "g000bb0049") return builds[48].isBuilt
    if (buildIndex === "g000bb0050") return builds[49].isBuilt
    if (buildIndex === "g000bb0051") return builds[50].isBuilt
    
    if (buildIndex === "g000bb0052") return builds[51].isBuilt
    if (buildIndex === "g000bb0053") return builds[52].isBuilt || builds[53].isBuilt || builds[54].isBuilt || builds[55].isBuilt || builds[56].isBuilt
    if (buildIndex === "g000bb0054") return builds[53].isBuilt || builds[54].isBuilt || builds[55].isBuilt
    if (buildIndex === "g000bb0055") return builds[54].isBuilt
    if (buildIndex === "g000bb0056") return builds[55].isBuilt
    if (buildIndex === "g000bb0057") return builds[56].isBuilt
    if (buildIndex === "g000bb0058") return builds[57].isBuilt || builds[58].isBuilt || builds[59].isBuilt
    if (buildIndex === "g000bb0059") return builds[58].isBuilt || builds[59].isBuilt
    if (buildIndex === "g000bb0060") return builds[59].isBuilt
    if (buildIndex === "g000bb0061") return builds[60].isBuilt || builds[61].isBuilt
    if (buildIndex === "g000bb0062") return builds[61].isBuilt
    if (buildIndex === "g000bb0063") return builds[62].isBuilt
    if (buildIndex === "g000bb0064") return builds[62].isBuilt || builds[63].isBuilt || builds[64].isBuilt
    if (buildIndex === "g000bb0065") return builds[64].isBuilt
    if (buildIndex === "g000bb0066") return builds[65].isBuilt
    if (buildIndex === "g000bb0067") return builds[66].isBuilt
    if (buildIndex === "g000bb0068") return builds[67].isBuilt
}