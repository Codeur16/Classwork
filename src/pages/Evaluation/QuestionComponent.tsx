import React from 'react';
import { question } from '../../models/questionModel';

interface QuestionProps {
  question: question;
  onSupprimer: () => void;
  onMettreAJour: (nouvelleQuestion: question) => void;
}

const QuestionComponent = ({ question, onSupprimer, onMettreAJour }: QuestionProps) => {
  // Affichage des champs communs à toutes les questions
  return (
    <div>
      <label>
        Enoncé:
        <input type="text" value={question.Enonce.toString()} onChange={(e) => onMettreAJour({ ...question, Enonce: e.target.value.toString() })} />
      </label>
      <br />
      <label>
        Réponse:
        <input type="text" value={question.Reponse.toString()} onChange={(e) => onMettreAJour({ ...question, Reponse: e.target.value })} />
      </label>
      <br />
      <label>
        Type:
        <select value={question.Type.toString()} onChange={(e) => onMettreAJour({ ...question, Type: e.target.value })}>
      <option value="text">Texte</option>
      <option value="select">Sélection</option>
    </select>
  </label>
  <br />

  {/* Affichage des champs spécifiques aux questions de type "sélection" */}
  {question.Type === 'select' && (
    <div>
      <label>Choix:</label>
      <br />
      {question.choix?.map((c, i) => (
        <div key={i}>
          <input type="text" value={c} onChange={(e) => {
            // Copie du tableau des choix actuels
            const nouveauxChoix = [...(question.choix ?? [])];
            // Remplacement du choix à l'index spécifié
            nouveauxChoix[i] = e.target.value.toString();
            // Mise à jour de la question
            onMettreAJour({ ...question, choix: nouveauxChoix });
          }} />
          <button onClick={() => {
            // Copie du tableau des choix actuels
            const nouveauxChoix = [...(question.choix ?? [])];
            // Suppression du choix à l'index spécifié
            nouveauxChoix.splice(i, 1);
            // Mise à jour de la question
            onMettreAJour({ ...question, choix: nouveauxChoix });
          }}>Supprimer</button>
        </div>
      ))}
      <button onClick={() => {
        // Copie du tableau des choix actuels
        const nouveauxChoix = [...question.choix ?? []];
        // Ajout d'un nouveau choix vide
        nouveauxChoix.push('');
        // Mise à jour de la question
        onMettreAJour({ ...question, choix: nouveauxChoix });
      }}>Ajouter un choix</button>
    </div>
  )}

  {/* Bouton pour supprimer la question */}
  <button onClick={onSupprimer}>Supprimer la question</button>
</div>
);
};

export default QuestionComponent;
