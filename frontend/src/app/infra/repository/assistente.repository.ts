import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { ChatRequest, ChatResponse, ChatMessage } from '../../core/models/assistente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistenteRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  sendMessage(request: ChatRequest): Observable<ChatResponse> {
    return this.post<ChatResponse>('/ai/chat', request);
  }

  getChatHistory(sessionId: string): Observable<ChatMessage[]> {
    return this.get<ChatMessage[]>(`/ai/chat/history/${sessionId}`);
  }

  clearChatHistory(sessionId: string): Observable<void> {
    return this.delete<void>(`/ai/chat/history/${sessionId}`);
  }

  getSuggestions(context?: string): Observable<string[]> {
    const endpoint = context ? `/ai/suggestions?context=${encodeURIComponent(context)}` : '/ai/suggestions';
    return this.get<string[]>(endpoint);
  }
}
