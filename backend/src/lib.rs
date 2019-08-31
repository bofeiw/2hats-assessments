use smart_contract_macros::smart_contract;

use smart_contract::log;
use smart_contract::payload::Parameters;
use std::collections::VecDeque;
use std::collections::HashMap;

struct BallotPaper {
    votes: HashMap<String, u32>,
    voted_ids: VecDeque<[u8; 32]>,
}

#[smart_contract]
impl BallotPaper {
    fn init(_params: &mut Parameters) -> Self {
        let mut votes: HashMap<String, u32> = HashMap::new();

        votes.insert("AYIREBI, CECIL (LIBERAL)".to_string(), 0);
        votes.insert("BUTLER, DIONE (PEPUBLICAN)".to_string(), 0);
        votes.insert("GARSIDE, CHARLES (LABOUR)".to_string(), 0);
        votes.insert("KING, STUART (DEMOCRATIC)".to_string(), 0);
        votes.insert("WHITWELL, FRANK (GREEN)".to_string(), 0);

        Self {
            votes: votes,
            voted_ids: VecDeque::new(),
        }
    }

    fn is_voted(&mut self, params: &mut Parameters) -> Result<(), String> {
        let id: [u8; 32] = params.sender;
        let voted: bool = self.voted_ids.contains(&id);

        if voted {
            log("1");
        } else {
            log("0");
        }

        Ok(())
    }

    fn vote(&mut self, params: &mut Parameters) -> Result<(), String> {
        let id: [u8; 32] = params.sender;
        let voted: bool = self.voted_ids.contains(&id);

        if voted {
            return Err(format!("No duplicated vote."));
        } else {
            self.voted_ids.push_back(id);
        }

        for preference in 1u32..6u32 {
            let candidate: String = params.read();
            match self.votes.get_mut(&candidate) {
                Some(v) => *v += preference,
                None => {}
            }
        }

        Ok(())
    }

    fn get_votes(&mut self, _params: &mut Parameters) -> Result<(), String> {
        let mut votes = Vec::new();

        for (k, v) in self.votes.iter() {
            votes.insert(0, format!("{}:{}", k, v));
        }

        log(&votes.join(";"));

        Ok(())
    }
}
